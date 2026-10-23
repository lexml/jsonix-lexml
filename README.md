# jsonix-lexml

## Como executar

Os executáveis para os três ambientes suportados (Linux, MacOS X e Windows) podem ser baixados na
página de [releases](https://github.com/lexml/jsonix-lexml/releases/), ou construídos como descrito
em [#Como compilar o conversor](#como-compilar-o-conversor):
```
jsonix-lexml-linux {tojson|toxml} [arq_entrada] [-o arq_saida]
```

Onde:
- `arq_entrada` especifica o arquivo fonte, xml ou json, conforme o comando (resp. `tojson` e `toxml`). 
  Se omitido, o conversor lê da entrada padrão.
- `-o arq_saida` especifica o arquivo de saída. Se omitido, o conversor grava para a saída padrão.  

O executável Linux requer um ambiente **baseado em glibc** ou com suporte à compatibilidade com glibc e libstdc++.
Por exemplo, para rodar em [Alpine Linux](https://hub.docker.com/_/alpine), é preciso
acrescentar os pacotes `gcompat`  e `libstdc++`:
``` 
apk add gcompat libstdc++
``` 

## Como compilar o conversor

Para compilar os executáveis é preciso ter no caminho (`PATH`):

- NodeJS;
- Java 11 ou superior (em Java 16+, as opções necessárias já estão em `.mvn/jvm.config`);
- Maven (`mvn`), com acesso a um repositório Maven (Maven Central ou mirror interno). A geração dos mapeamentos (`npm run build:mappings`) executa o compilador de esquemas do jsonix via Maven.

Em seguida, execute os seguintes passos no diretório do projeto:

1 - Preparar o ambiente NodeJS:
```
npm install
```
2 - Executar script "build:exe":
```
npm run build:exe
```
Como resultado, serão gerados o diretório `mappings` e três executáveis, `jsonix-lexml-linux`, `jsonix-lexml-macos` e `jsonix-lexml-win.exe`, utilizáveis, respectivamente, em ambientes Linux (glibc), MacOS X e Windows.

## Como gerar uma release

Além dos requisitos de compilação acima, é preciso ter o [GitHub CLI](https://cli.github.com/) (`gh`) instalado
e autenticado (`gh auth login`), com permissão de escrita no repositório. A partir da branch `main` atualizada
e sem alterações pendentes, execute:
```
npm run release -- <versão> [--issue N] [--notes arquivo.md] [--draft] [--dry-run]
```

O script:
1. verifica a branch, a sincronia com `origin/main`, se a tag ainda não existe e as ferramentas necessárias;
2. atualiza a versão em `package.json`, `package-lock.json` e `src/main.js`;
3. gera mapeamentos, bundle e executáveis (`npm run build:exe`) e executa os testes (`npm test`);
4. testa o executável da plataforma atual (`--version` e uma conversão);
5. faz o commit `chore: atualiza versão para <versão> (#N)`, cria a tag `<versão>` e envia ambos para `origin`;
6. cria a release no GitHub com os três executáveis.

Opções:
- `--issue N`: número da issue referenciada no commit da versão (se omitido, o script pergunta);
- `--notes arquivo.md`: notas da release (se omitido, são geradas pelo GitHub a partir dos commits);
- `--draft`: cria a release como rascunho;
- `--dry-run`: executa os passos 1 a 4, mostra os comandos de git/gh que seriam executados e desfaz a alteração
  da versão, sem commitar nem enviar nada.


## Mapeamentos JSON

O compilador jsonix gera uma série de arquivos que descrevem o mapeamento JSON gerado à partir dos esquemas do formato LexML. Esses mapeamentos são gerados no diretório `mappings` pelo passo (2) descrito acima, ou isoladamente com `npm run build:mappings`. Eles podem ser usados, juntamente com a biblioteca [jsonix](https://github.com/highsource/jsonix), para manipular arquivos json gerados à partir da conversão, ou para construir arquivos json compatíveis para posterior conversão para formato LexML. 

## Uso da bibloteca em Javascript

> Orientações sobre como usar a biblioteca jsonix-lexml em javascript podem ser encontradas em [README.npm.md](README.npm.md) .

