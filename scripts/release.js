#!/usr/bin/env node

// Gera e publica uma release do jsonix-lexml no GitHub.
//
// Uso: npm run release -- <versão> [--issue N] [--notes arquivo.md] [--draft] [--dry-run]
//
// Passos: verificações, atualização da versão (package.json, package-lock.json
// e src/main.js), build dos executáveis, testes, teste rápido do executável da
// plataforma atual, commit + tag + push e criação da release com os executáveis.
// Com --dry-run, executa até o teste do executável, mostra os comandos de
// git/gh que seriam executados e desfaz a alteração da versão.

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ROOT = path.resolve(__dirname, '..');
const EXECUTAVEIS = ['jsonix-lexml-linux', 'jsonix-lexml-macos', 'jsonix-lexml-win.exe'];
const EXECUTAVEL_LOCAL = {
    linux: 'jsonix-lexml-linux',
    darwin: 'jsonix-lexml-macos',
    win32: 'jsonix-lexml-win.exe',
};
const ARQUIVOS_VERSAO = ['package.json', 'package-lock.json', 'src/main.js'];
const AMOSTRA = 'samples/documento-articulado-exemplo.xml';
// No Windows, npm e mvn são scripts .cmd e só podem ser executados via shell.
const VIA_SHELL = process.platform === 'win32' ? ['npm', 'mvn'] : [];

function uso(msg) {
    if (msg) console.error(`Erro: ${msg}\n`);
    console.error('Uso: npm run release -- <versão> [--issue N] [--notes arquivo.md] [--draft] [--dry-run]');
    process.exit(1);
}

function lerArgumentos(argv) {
    const opts = { draft: false, dryRun: false };
    for (let i = 0; i < argv.length; i++) {
        const arg = argv[i];
        if (arg === '--draft') opts.draft = true;
        else if (arg === '--dry-run') opts.dryRun = true;
        else if (arg === '--issue') opts.issue = argv[++i];
        else if (arg === '--notes') opts.notes = argv[++i];
        else if (arg === '-h' || arg === '--help') uso();
        else if (arg.startsWith('-')) uso(`opção desconhecida: ${arg}`);
        else if (!opts.versao) opts.versao = arg;
        else uso(`argumento inesperado: ${arg}`);
    }
    if (!opts.versao) uso('informe a versão.');
    if (!/^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/.test(opts.versao)) uso(`versão inválida: ${opts.versao}`);
    if (opts.issue !== undefined && !/^\d+$/.test(opts.issue)) uso(`número de issue inválido: ${opts.issue}`);
    if (opts.notes !== undefined && !fs.existsSync(opts.notes)) uso(`arquivo de notas não encontrado: ${opts.notes}`);
    return opts;
}

// Executa um comando a partir da raiz do projeto. Com capture, devolve a saída
// padrão; sem capture, a saída vai direto para o terminal.
function run(cmd, args, { capture = false, check = true } = {}) {
    const stdio = capture ? ['ignore', 'pipe', 'pipe'] : 'inherit';
    const res = VIA_SHELL.includes(cmd)
        ? spawnSync([cmd, ...args].join(' '), { cwd: ROOT, stdio, shell: true, encoding: 'utf8' })
        : spawnSync(cmd, args, { cwd: ROOT, stdio, encoding: 'utf8' });
    if (res.error) {
        if (!check) return null;
        throw new Error(`não foi possível executar "${cmd}": ${res.error.message}`);
    }
    if (res.status !== 0) {
        if (!check) return null;
        const detalhe = capture ? `\n${(res.stderr || '').trim()}` : '';
        throw new Error(`"${[cmd, ...args].join(' ')}" terminou com código ${res.status}${detalhe}`);
    }
    return capture ? res.stdout.trim() : '';
}

function etapa(msg) {
    console.log(`\n==> ${msg}`);
}

function aviso(msg) {
    console.warn(`AVISO: ${msg}`);
}

function perguntar(pergunta) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => rl.question(pergunta, resposta => {
        rl.close();
        resolve(resposta.trim());
    }));
}

function versaoAtual() {
    return JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8')).version;
}

// Em --dry-run, problemas que só impediriam a publicação viram avisos.
function verificacoes(opts) {
    etapa('Verificações');
    const falha = msg => {
        if (opts.dryRun) aviso(msg);
        else throw new Error(msg);
    };

    if (run('git', ['status', '--porcelain', '--untracked-files=no'], { capture: true })) {
        throw new Error('há alterações não commitadas em arquivos versionados.');
    }

    const branch = run('git', ['rev-parse', '--abbrev-ref', 'HEAD'], { capture: true });
    if (branch !== 'main') falha(`a release deve ser gerada a partir da branch main (branch atual: ${branch}).`);

    run('git', ['fetch', '--quiet', 'origin', 'main']);
    const head = run('git', ['rev-parse', 'HEAD'], { capture: true });
    const origem = run('git', ['rev-parse', 'origin/main'], { capture: true });
    if (head !== origem) falha('a branch atual não está igual a origin/main.');

    if (opts.versao === versaoAtual()) throw new Error(`a versão ${opts.versao} já é a versão atual.`);
    if (run('git', ['rev-parse', '-q', '--verify', `refs/tags/${opts.versao}`], { capture: true, check: false })) {
        throw new Error(`a tag ${opts.versao} já existe localmente.`);
    }
    if (run('git', ['ls-remote', '--tags', 'origin', `refs/tags/${opts.versao}`], { capture: true })) {
        throw new Error(`a tag ${opts.versao} já existe em origin.`);
    }

    if (run('gh', ['auth', 'status'], { capture: true, check: false }) === null) {
        falha('o GitHub CLI (gh) não está instalado ou autenticado (execute "gh auth login").');
    }
    if (run('mvn', ['-v'], { capture: true, check: false }) === null) {
        throw new Error('Maven (mvn) não encontrado no PATH.');
    }
    if (run('java', ['-version'], { capture: true, check: false }) === null) {
        throw new Error('Java não encontrado no PATH.');
    }
    console.log('ok');
}

function atualizarVersao(versao) {
    etapa(`Atualizando a versão para ${versao}`);
    run('npm', ['version', versao, '--no-git-tag-version']);

    const mainJs = path.join(ROOT, 'src', 'main.js');
    const fonte = fs.readFileSync(mainJs, 'utf8');
    const padrao = /program\.version\('[^']*'\)/g;
    if ((fonte.match(padrao) || []).length !== 1) {
        throw new Error('não foi encontrada exatamente uma chamada program.version(\'...\') em src/main.js.');
    }
    fs.writeFileSync(mainJs, fonte.replace(padrao, `program.version('${versao}')`));
}

// Desfaz a alteração da versão e uma eventual troca de README deixada por um
// build interrompido.
function restaurar() {
    run('git', ['checkout', '--', ...ARQUIVOS_VERSAO, 'README.md'], { check: false });
    const readmeGit = path.join(ROOT, 'README.git.md');
    if (fs.existsSync(readmeGit)) fs.unlinkSync(readmeGit);
}

function testarExecutavel(versao) {
    etapa('Testando o executável');
    for (const exe of EXECUTAVEIS) {
        if (!fs.existsSync(path.join(ROOT, exe))) throw new Error(`executável não gerado: ${exe}`);
    }
    const local = EXECUTAVEL_LOCAL[process.platform];
    if (!local) {
        aviso(`plataforma ${process.platform} sem executável correspondente; teste do executável ignorado.`);
        return;
    }
    const exe = path.join(ROOT, local);
    const versaoExe = run(exe, ['--version'], { capture: true });
    if (versaoExe !== versao) throw new Error(`${local} --version retornou "${versaoExe}" (esperado "${versao}").`);
    JSON.parse(run(exe, ['tojson', AMOSTRA], { capture: true }));
    console.log(`ok (${local})`);
}

function comandosPublicacao(opts, issue) {
    const notas = opts.notes ? ['--notes-file', opts.notes] : ['--generate-notes'];
    return [
        ['git', ['add', ...ARQUIVOS_VERSAO]],
        ['git', ['commit', '-m', `chore: atualiza versão para ${opts.versao} (#${issue})`]],
        ['git', ['tag', opts.versao]],
        ['git', ['push', 'origin', 'HEAD']],
        ['git', ['push', 'origin', `refs/tags/${opts.versao}`]],
        ['gh', ['release', 'create', opts.versao, ...EXECUTAVEIS, '--title', opts.versao, ...notas,
            ...(opts.draft ? ['--draft'] : [])]],
    ];
}

function formatar([cmd, args]) {
    return [cmd, ...args.map(a => (/[\s"#()]/.test(a) ? JSON.stringify(a) : a))].join(' ');
}

async function main() {
    const opts = lerArgumentos(process.argv.slice(2));
    verificacoes(opts);

    let issue = opts.issue;
    if (!issue && !opts.dryRun) {
        issue = await perguntar('Número da issue para a mensagem do commit: ');
        if (!/^\d+$/.test(issue)) throw new Error(`número de issue inválido: ${issue}`);
    }

    try {
        atualizarVersao(opts.versao);
        etapa('Gerando mapeamentos, bundle e executáveis');
        run('npm', ['run', 'build:exe']);
        etapa('Executando os testes');
        run('npm', ['test']);
        testarExecutavel(opts.versao);
    } catch (e) {
        restaurar();
        throw e;
    }

    const comandos = comandosPublicacao(opts, issue || '<issue>');
    if (opts.dryRun) {
        restaurar();
        etapa('Dry-run: comandos que seriam executados');
        comandos.forEach(c => console.log(`  ${formatar(c)}`));
        console.log('\nA alteração da versão foi desfeita; nada foi commitado nem enviado.');
        return;
    }

    etapa('Publicando');
    for (const c of comandos) {
        console.log(`$ ${formatar(c)}`);
        try {
            run(...c);
        } catch (e) {
            console.error('\nA publicação falhou neste passo. Execute manualmente este e os passos seguintes:');
            comandos.slice(comandos.indexOf(c)).forEach(r => console.error(`  ${formatar(r)}`));
            throw e;
        }
    }
    console.log(`\nRelease ${opts.versao} publicada${opts.draft ? ' como rascunho' : ''}.`);
}

main().catch(e => {
    console.error(`\nErro: ${e.message}`);
    process.exit(1);
});
