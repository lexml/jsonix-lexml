# jsonix-lexml

Biblioteca para conversão entre xml e json de texto estruturado em formato Lexml Brasil de normas e proposições.

## Instalação
```
    npm install jsonix-lexml
```

## Como usar

### Uso em Javascript
```js
    import jsonixLexml from 'jsonix-lexml';

    const xml = `
        <LexML xsi:schemaLocation="http://www.lexml.gov.br/1.0 ../xsd/lexml-br-rigido.xsd"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.lexml.gov.br/1.0">
            <Metadado>
                <Identificacao URN="urn:lex:br:federal:medida.provisoria:LEXML_URN_ID"/>
            </Metadado>
            <ProjetoNorma>
                <Norma>
                    <ParteInicial>
                        <Epigrafe id="epigrafe">MEDIDA PROVISÓRIA Nº LEXML_EPIGRAFE_NUMERO de LEXML_EPIGRAFE_DATA </Epigrafe>
                        <Ementa id="ementa">Dispõe sobre as medidas excepcionais relativas à aquisição de vacinas, de insumos, de bens e serviços de logística, de tecnologia da informação e comunicação, de comunicação social e publicitária e de treinamentos destinados à vacinação contra a Covid-19 e sobre o Plano Nacional de Operacionalização da Vacinação contra a Covid-19.
                        </Ementa>
                        <Preambulo id="preambulo">
                            <p>O CONGRESSO NACIONAL decreta:</p>
                        </Preambulo>
                    </ParteInicial>
                    <Articulacao>
                        <Artigo id="art1">
                            <Rotulo>Art. 1º</Rotulo>
                            <Caput id="art1_cpt">
                                <p>Esta Lei dispõe sobre as medidas excepcionais relativas à aquisição de vacinas, de insumos, de bens e serviços de logística, de tecnologia da informação e comunicação, de comunicação social e publicitária e de treinamentos destinados à vacinação contra a Covid-19 e sobre o Plano Nacional de Operacionalização da Vacinação contra a Covid-19.</p>
                            </Caput>
                        </Artigo>
                    </Articulacao>
                </Norma>
            </ProjetoNorma>
        </LexML>
    `;

    const jsonResult = jsonixLexml.toJSON(xml);
    const xmlResult = jsonixLexml.toXML(jsonResult); 

    console.log('jsonResult', jsonResult);
    console.log('xmlResult', xmlResult);
```

> :warning: Para uso diretamente no html você deve referenciar o arquivo `jsonix-lexml.js` e usar a variável global `jsonixLexml' que é criada automaticamente ao carregar o javascript.

```html
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="#">
        <title>Document</title>
        <script src="jsonix-lexml.js"></script>
    </head>
    <body>    
    </body>
    <script>
        const xml = `
            <LexML xsi:schemaLocation="http://www.lexml.gov.br/1.0 ../xsd/lexml-br-rigido.xsd"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.lexml.gov.br/1.0">
                <Metadado>
                    <Identificacao URN="urn:lex:br:federal:medida.provisoria:LEXML_URN_ID"/>
                </Metadado>
                <ProjetoNorma>
                    <Norma>
                        <ParteInicial>
                            <Epigrafe id="epigrafe">MEDIDA PROVISÓRIA Nº LEXML_EPIGRAFE_NUMERO de LEXML_EPIGRAFE_DATA </Epigrafe>
                            <Ementa id="ementa">Dispõe sobre as medidas excepcionais relativas à aquisição de vacinas, de insumos, de bens e serviços de logística, de tecnologia da informação e comunicação, de comunicação social e publicitária e de treinamentos destinados à vacinação contra a Covid-19 e sobre o Plano Nacional de Operacionalização da Vacinação contra a Covid-19.
                            </Ementa>
                            <Preambulo id="preambulo">
                                <p>O CONGRESSO NACIONAL decreta:</p>
                            </Preambulo>
                        </ParteInicial>
                        <Articulacao>
                            <Artigo id="art1">
                                <Rotulo>Art. 1º</Rotulo>
                                <Caput id="art1_cpt">
                                    <p>Esta Lei dispõe sobre as medidas excepcionais relativas à aquisição de vacinas, de insumos, de bens e serviços de logística, de tecnologia da informação e comunicação, de comunicação social e publicitária e de treinamentos destinados à vacinação contra a Covid-19 e sobre o Plano Nacional de Operacionalização da Vacinação contra a Covid-19.</p>
                                </Caput>
                            </Artigo>
                        </Articulacao>
                    </Norma>
                </ProjetoNorma>
            </LexML>
        `;
        const json = jsonixLexml.toJSON(xml)
        document.body.innerHTML = '<pre>' + JSON.stringify(json, null, 2) + '</pre>'
        console.log('json', json);
    </script>
    </html>
```

### Formato do JSON

#### Datas

Atributos do tipo `xsd:date` e `xsd:dateTime` são representados no JSON como a string original do XML, preservando o timezone (ex.: `"2026-05-12T10:15:00-03:00"`). No `toXML`, também são aceitos objetos `Date`.

#### Metadados proprietários do LexEdit

O bloco `<lexedit:Metadado>` (namespace `http://www.lexml.gov.br/lexedit/1.0`), dentro de `<MetadadoProprietario>`, é convertido em um objeto tipado, em `metadado.metadadoProprietario[].any[].value`:

```json
"metadadoProprietario": [
    {
        "TYPE_NAME": "br_gov_lexml__1.MetadadoProprietario",
        "fonte": "http://www.lexml.gov.br/lexedit/1.0",
        "any": [
            {
                "name": { "namespaceURI": "http://www.lexml.gov.br/lexedit/1.0", "localPart": "Metadado", "prefix": "lexedit", ... },
                "value": {
                    "TYPE_NAME": "br_gov_lexml_lexedit__1.Metadado",
                    "dataUltimaModificacao": "2026-05-12T10:15:00-03:00",
                    "aplicacao": "LexEdit",
                    "autoria": { ... },
                    "comentarios": { ... },
                    "revisoesArticulacao": { ... },
                    ...
                }
            }
        ]
    }
]
```

Metadados proprietários de outras origens (namespaces desconhecidos) continuam sendo representados como DOM.

Em `revisoesArticulacao.revisaoArticulacao[]`, o dispositivo revisado fica em **uma** entre 17 propriedades possíveis, conforme o elemento do XML: `parte`, `livro`, `titulo`, `subtitulo`, `capitulo`, `secao`, `artigo`, `omissis`, `subsecao`, `agrupamentoHierarquico`, `caput`, `paragrafo`, `inciso`, `alinea`, `item`, `dispositivoGenerico` ou `p`. Diferentemente da `Articulacao`, o dispositivo não fica envolvido em `{name, value}`:

```json
{
    "TYPE_NAME": "br_gov_lexml_lexedit__1.RevisaoArticulacao",
    "revisao": "excluido",
    "refIdUsuario": "sf:sicrana",
    "data": "2026-05-12T09:05:00-03:00",
    "artigo": {
        "TYPE_NAME": "br_gov_lexml__1.DispositivoType",
        "id": "_art4-exc1",
        ...
    }
}
```

Apenas uma dessas propriedades deve ser preenchida. O `toXML` não valida essa regra: se houver mais de uma, todas são gravadas no XML, que fica inválido segundo o esquema.

### Uso em linha de comando
Para uso em linha de comando é recomendável instalar a biblioteca globalmente
```
    npm install jsonix-lexml -g
```

```
    jsonix-lexml help

        Usage: main [options] [command]

        Options:
        -v, --version              número da versão
        -h, --help                 display help for command

        Commands:
        tojson [options] [source]  converte um documento no formato XML do LexML Brasil para formato JSON
        toxml [options] [source]   converte um documento no JSON para formato XML do LexML Brasil
        help [command]             display help for command

        Exemplos:
            jsonix-lexml help
            jsonix-lexml help tojson

            jsonix-lexml tojson texto.xml -o texto.json
            jsonix-lexml toxml texto.json -o texto.xml    
```

> :warning: Outras formas de conversão em linha de comando estão disponíveis a partir do uso de imagem docker ou executáveis. Orientações de como utilizá-las podem ser encontradas em https://github.com/lexml/jsonix-lexml#jsonix-lexml .
