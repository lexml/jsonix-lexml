# jsonix-lexml

## Como executar

É possível executar o conversor diretamente de uma [imagem docker](https://hub.docker.com/repository/docker/lexmlbr/jsonix-lexml):

```
# Para conversão de XML para JSON:
docker run -i --rm lexmlbr/jsonix-lexml:latest tojson < {arquivo_xml.xml} > {arquivo_json.json}
# Para conversão de JSON para XML:
docker run -i --rm lexmlbr/jsonix-lexml:latest toxml < {arquivo_json.json} > {arquivo_xml.xml}
```

Também é possível executar o conversor diretamente, através do executável construído como descrito
em [#Como compilar o conversor diretamente](#como-compilar-o-conversor-diretamente):
```
jsonix-lexml-linux {tojson|toxml} [arq_entrada] [-o arq_saida]
```

Onde:
- `arq_entrada` especifica o arquivo fonte, xml ou json, conforme o comando (resp. `tojson` e `toxml`). 
  Se omitido, o conversor lê da entrada padrão.
- `-o arq_saida` especifica o arquivo de saída. Se omitido, o conversor grava para a saída padrão.  

Releases dos executáveis para os três ambientes suportados (Linux, MacOS X e Windows) podem
ser encontrados na página de [releases](https://github.com/lexml/jsonix-lexml/releases/).

## Como usar o executável em imagens docker

O conversor é um arquivo executável presente na imagem docker, em `/jsonix-lexml-linux`. O executável
pode ser usado em outras imagens docker **baseadas em glibc** ou com suporte à compatibilidade com glibc e libstdc++.
Por exemplo, para rodar em uma imagem baseada em [Alpine Linux](https://hub.docker.com/_/alpine), é preciso
acrescentar os pacotes `gcompat`  e `libstdc++`:
``` 
apk add gcompat libstdc++
``` 

## Como gerar a imagem docker

A compilação é feita em ambiente docker. Para gerar uma imagem execute `docker build -t jsonix-lexml:latest .`.

## Como compilar o conversor diretamente

Para compilar os executáveis diretamente, sem o uso de docker, é preciso ter o NodeJS 14 e Java 11 no caminho e executar os seguintes passos no diretório do projeto:

1 - Preparar o ambiente NodeJS:
```
npm install
```
2 - Executar script "build:exe":
```
npm run build:exe
```
Como resultado, serão gerados o diretório `mappings` e três executáveis, `jsonix-lexml-linux`, `jsonix-lexml-macos` e `jsonix-lexml-win.exe`, utilizáveis, respectivamente, em ambientes Linux (glibc), MacOS X e Windows.


## Mapeamentos JSON

O compilador jsonix gera uma série de arquivos que descrevem o mapeamento JSON gerado à partir dos esquemas do formato LexML. Esses mapeamentos são gerados aṕos o passo (3) descrito acima (no diretório `mappings`), e podem ser encontrados também na imagem docker, no caminho `/mappings`. Eles podem ser usados, juntamente com a biblioteca [jsonix](https://github.com/highsource/jsonix), para manipular arquivos json gerados à partir da conversão, ou para construir arquivos json compatíveis para posterior conversão para formato LexML. 

## Uso da bibloteca em Javascript

> Orientações sobre como usar a biblioteca jsonix-lexml em javascript podem ser encontradas em [README.npm.md](README.npm.md) .

