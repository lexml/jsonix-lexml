# jsonix-lexml

## Como executar

É possível executar o conversor diretamente da imagem docker:

```
# Para conversão de XML para JSON:
docker run -i --rm lexmlbr/jsonix-lexml:latest tojson < {arquivo_xml.xml} > {arquivo_json.json}
# Para conversão de JSON para XML:
docker run -i --rm lexmlbr/jsonix-lexml:latest toxml < {arquivo_json.json} > {arquivo_xml.xml}
```

Também é possível executar o conversor diretamente, através do executável construído como descrito
em sdasdasd:
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

A compilação é feita em ambiente docker. Para gerar uma imagem
execute `docker build -t jsonix-lexml:latest .`.

## Como compilar o conversor diretamente

Para compilar os executáveis diretamente, sem o uso de docker, é preciso ter o NodeJS 14, Java 11 e Maven no caminho e executar os seguintes passos
no diretório do projeto:

1 - Preparar o ambiente NodeJS:
```
npm install
```
2 - Instalar o compilador jsonix no repositório local do Maven:
```
mvn install:install-file \
    	-Dfile=node_modules/jsonix/lib/jsonix-schema-compiler-full.jar \
	-DgroupId=local \
	-DartifactId=jsonix-schema-compiler-full \
	-Dversion=1.0.0 \
	-Dpackaging=jar \
	-DgeneratePom=true
```
3 - Executar o compilador jsonix via Maven: 
```
mvn exec:java
```
Como resultado, serão gerados três executáveis, `jsonix-lexml-linux`, `jsonix-lexml-macos` e `jsonix-lexml-win.exe`, utilizáveis, respectivamente,
em ambientes Linux (glibc), MacOS X e Windows.


## Mapeamentos JSON

O compilador jsonix gera uma série de arquivos que descrevem o mapeamento JSON gerado à partir dos esquemas do formato LexML. Esses mapeamentos
são gerados aṕos o passo (3) descrito acima (no diretório `mappings`), e podem ser encontrados também na imagem docker, no caminho `/mappings`. Eles
podem ser usados, juntamente com a biblioteca [jsonix](https://github.com/highsource/jsonix), para manipular arquivos json gerados à partir da conversão, ou para construir arquivos json
compatíveis para posterior conversão para formato LexML.

