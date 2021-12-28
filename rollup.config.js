import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';

const plugins = [
    nodeResolve(),
    commonjs(),
    // Replace necessário porque o arquivo jsonix.js possui duas variáveis sem definição
    replace({
        preventAssignment: true,
        'sourceIsEvt = typeof window': 'var sourceIsEvt =  typeof window',
        'p = this.namespacePrefixes': 'var p =  this.namespacePrefixes',
    }),
    copy({
        targets: [
            // Arquivos usados para a "versão executável" do pacote
            { src: 'mappings/**', dest: 'dist/mappings' },
            { src: 'src', dest: 'dist' },
        ],
    }),
]

export default [
    {
        input: 'src/jsonix-lexml.js',
        output: {
            file: 'dist/bundle/jsonix-lexml.js',
            format: 'umd',
            exports: 'named',

            // nome da variável que será criada quando usando o arquivo 'jsonix-lexml.js' em uma página html
            // Ex.: <script src="jsonix-lexml.js"></script>
            name: 'jsonixLexml',

            globals: {
                path: 'path',
            }
        },
        plugins,
    },
]