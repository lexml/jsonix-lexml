# Plano: tratar `schemas/lexedit.xsd` na conversão Jsonix

## Objetivo

Fazer com que `jsonix-lexml` (o par `toJSON`/`toXML` de [src/jsonix-lexml.js](../src/jsonix-lexml.js), usado tanto pela lib quanto pelo CLI [src/main.js](../src/main.js)) converta o bloco `lexedit:Metadado` — que ocupa o ponto de extensão `MetadadoProprietario` do LexML — de/para uma estrutura JSON tipada e legível, e não para um fragmento XML opaco. Documento de referência para validar o resultado: [samples/documento-articulado-exemplo.xml](../samples/documento-articulado-exemplo.xml).

## Decisões já tomadas

Neste projeto, `lexml-simples.xsd` **pode ser alterado** (não é tratado como imutável/externo) — isso muda a arquitetura da solução em relação a uma primeira versão deste plano, que evitava tocar nele. Duas mudanças já foram aplicadas no repositório como consequência disso:

1. **[schemas/lexml-simples.xsd:292](../schemas/lexml-simples.xsd#L292)** — `processContents="skip"` → `processContents="lax"` no `xsd:any` de `MetadadoProprietario`. Efeito comprovado (compilei as duas variantes e comparei o mapping gerado): com `"skip"`, o Jsonix sempre gera a propriedade `any` com `allowTypedObject: false`, ou seja, qualquer conteúdo dentro de `MetadadoProprietario` vira DOM cru, não importa quais outros schemas sejam compilados junto. Com `"lax"`, esse `allowTypedObject: false` desaparece (volta ao default `true` do Jsonix) — o unmarshaller passa a tentar casar o elemento encontrado contra qualquer elemento global conhecido pelo `Jsonix.Context`, e só cai para DOM cru se não reconhecer o namespace/nome. Isso **elimina a necessidade de dois contextos Jsonix e de uma camada de merge manual**: basta compilar `lexedit.xsd` junto com `lexml-simples.xsd` e carregar os dois módulos gerados no mesmo `Jsonix.Context` já usado em `jsonix-lexml.js`.
2. **[samples/documento-articulado-exemplo.xml:8](../samples/documento-articulado-exemplo.xml#L8)** — adicionado `fonte="http://www.lexml.gov.br/lexedit/1.0"` ao `<MetadadoProprietario>`, que faltava (o atributo é obrigatório em `lexml-simples.xsd`, `xsd:anyURI`).
3. **[schemas/lexedit.xsd:169-189](../schemas/lexedit.xsd#L169-L189)** — o `xsd:choice` de `RevisaoArticulacao` deixou de referenciar os grupos `lexml:LXhier`/`lexml:LXcontainers` e passou a listar os 17 elementos (`Parte`, `Livro`, ..., `DispositivoGenerico`, `p`) diretamente com `xsd:element ref`. Motivo: legibilidade e desacoplamento de `lexedit.xsd` em relação à estrutura interna dos grupos de `lexml-simples.xsd` — aceitável porque o formato LexML é estável e `lexedit.xsd` pode ser revisado manualmente se algum nível hierárquico for adicionado/removido do LexML no futuro. **Importante: recompilei antes e depois e o mapping gerado para `RevisaoArticulacao` é byte-a-byte o mesmo conjunto de 17 propriedades** — essa mudança é cosmética/estrutural no XSD, não resolve a fragilidade do binding descrita na seção dedicada abaixo (isso precisa ser tratado na camada de aplicação, não no schema). Também testei a customização padrão do JAXB para colapsar um `xsd:choice` num único campo (`jaxb:property choiceContentProperty="true"`) como alternativa real ao problema — **o `jsonix-schema-compiler-full.jar` deste projeto rejeita esse atributo** (`'choiceContentProperty' is not allowed to appear in element 'jaxb:property'`), ou seja, essa customização não é uma opção com o toolchain atual.

## Situação atual (verificada no repositório)

1. **`lexedit.xsd` não entra no build oficial.** O `pom.xml` (usado pelo `Dockerfile`, que é o build "oficial" com JDK 11 + Maven) invoca o compilador apenas com `schemas/lexml-simples.xsd schemas/math.xsd schemas/xlink.xsd schemas/xml.xsd` ([pom.xml:44](../pom.xml#L44)) — `lexedit.xsd` fica de fora. Já o script `mappings:jsonix-compiler` do `package.json` usa um glob (`schemas/*.xsd`, [package.json:32](../package.json#L32)) que incluiria `lexedit.xsd`, mas essa rota nunca foi rodada com sucesso: `mappings/` não tem nenhum `br_gov_lexml_lexedit__1.*`. As duas definições de build estão divergentes e precisam ser reconciliadas.

2. **O toolchain local quebra em JDK ≥ 9.** Rodar `java -jar node_modules/jsonix/lib/jsonix-schema-compiler-full.jar ...` diretamente (como faz o script `npm`) falha com `ClassNotFoundException: javax.activation.DataSource` em JDK 11 e JDK 17, porque o módulo `javax.activation` foi removido do JDK a partir da 9. O build via Maven funciona porque o `pom.xml` declara a dependência `javax.activation:activation:1.1.1` ([pom.xml:26-30](../pom.xml#L26-L30)) no classpath. Testado neste ambiente: com **JDK 8** (que ainda traz `javax.activation` embutido), `java -jar jsonix-schema-compiler-full.jar -generateJsonSchema -d <out> schemas/lexml-simples.xsd schemas/lexedit.xsd schemas/math.xsd schemas/xlink.xsd schemas/xml.xsd` compila sem erros e gera `br_gov_lexml_lexedit__1.js` (19,7K) e `.jsonschema` corretamente, com `dependencies: ['br_gov_lexml__1']`. Ou seja, o problema é só de toolchain — o script `npm run build:mappings` está quebrado hoje mesmo sem mexer em `lexedit.xsd`.

3. **`RevisaoArticulacao` tem um `xsd:choice` de 17 elementos do LexML** (a hierarquia inteira mais `p`) ([lexedit.xsd:169-189](../schemas/lexedit.xsd#L169-L189), já achatado — ver decisão 3 acima). Ver seção dedicada abaixo — é o ponto historicamente mais frágil desse tipo de binding, independente de como o `xsd:choice` está escrito no XSD.

4. Os identificadores citados no comentário do topo de `lexedit.xsd` (`docs/extensao-formato-lexml/00 a 13`, `docs/extensao-formato-lexml/plano-xsd-lexedit.md`) **não existem neste repositório** — não há pasta `docs/extensao-formato-lexml/`. **Confirmado: essas referências podem ser ignoradas** — não fazem parte do escopo deste plano, não serão reconstituídas, e não bloqueiam nenhuma das fases abaixo.

## O caso do `RevisaoArticulacao`

Declaração atual (já achatada — ver decisão 3 em "Decisões já tomadas"):

```xml
<xsd:element name="RevisaoArticulacao">
    <xsd:complexType>
        <xsd:choice minOccurs="0" maxOccurs="1">
            <xsd:element ref="lexml:Parte" />
            <xsd:element ref="lexml:Livro" />
            <xsd:element ref="lexml:Titulo" />
            <xsd:element ref="lexml:Subtitulo" />
            <xsd:element ref="lexml:Capitulo" />
            <xsd:element ref="lexml:Secao" />
            <xsd:element ref="lexml:Artigo" />
            <xsd:element ref="lexml:Omissis" />
            <xsd:element ref="lexml:Subsecao" />
            <xsd:element ref="lexml:AgrupamentoHierarquico" />
            <xsd:element ref="lexml:Caput" />
            <xsd:element ref="lexml:Paragrafo" />
            <xsd:element ref="lexml:Inciso" />
            <xsd:element ref="lexml:Alinea" />
            <xsd:element ref="lexml:Item" />
            <xsd:element ref="lexml:DispositivoGenerico" />
            <xsd:element ref="lexml:p" />
        </xsd:choice>
        <xsd:attribute type="xsd:string" name="refIdDispositivo" />
        <xsd:attribute type="xsd:string" name="revisao" use="required" />
        ...
    </xsd:complexType>
</xsd:element>
```

Antes do achatamento, essas 17 alternativas vinham de dois grupos do LexML, `lexml:LXhier` (`Parte | Livro | Titulo | Subtitulo | Capitulo | Secao | Artigo | Omissis | Subsecao | AgrupamentoHierarquico`, [lexml-simples.xsd:532-545](../schemas/lexml-simples.xsd#L532-L545)) e `lexml:LXcontainers` (`Caput | Paragrafo | Inciso | Alinea | Item | DispositivoGenerico`, [lexml-simples.xsd:514-523](../schemas/lexml-simples.xsd#L514-L523)), mais `lexml:p` avulso. O achatamento listou os mesmos 17 elementos diretamente — o conjunto de alternativas não mudou, só deixou de depender da definição desses grupos em `lexml-simples.xsd`.

De qualquer forma, o conteúdo de `RevisaoArticulacao` é **um único dispositivo, de exatamente um desses 17 tipos possíveis** — faz sentido: a revisão registra o estado de *um* dispositivo que foi excluído/alterado (no exemplo da amostra, um `<Artigo>` inteiro).

**O problema é como o JAXB (usado por baixo do `jsonix-schema-compiler`) traduz isso, e achatar o `xsd:choice` não muda esse comportamento.** Ele não tem uma noção nativa de "union type" em Java/JS. Quando encontra um `xsd:choice` de elementos de tipos diferentes sem `maxOccurs` repetido, gera **um campo para cada alternativa** — usar `xsd:group ref` ou `xsd:element ref` direto dá exatamente no mesmo resultado, confirmei recompilando as duas formas e comparando o mapping gerado byte a byte. A aplicação é responsável por preencher só um campo por vez. O mapping gerado para `RevisaoArticulacao` tem estas 17 propriedades, todas marcadas `required: true` individualmente:

```
parte, livro, titulo, subtitulo, capitulo, secao, artigo, omissis, subsecao,
agrupamentoHierarquico, caput, paragrafo, inciso, alinea, item,
dispositivoGenerico, p
```

Consequências práticas:

1. **`required: true` aqui é enganoso.** Não significa "todos os 17 campos precisam estar presentes" — significa apenas que, *dentro do ramo daquela alternativa*, o elemento tem `minOccurs="1"`. Um objeto `RevisaoArticulacao` válido tem no máximo um desses 17 campos preenchido (ou nenhum, já que o `choice` inteiro é `minOccurs="0"`), e os outros 16 ausentes/`undefined`.
2. **Leitura (XML→JSON) é segura.** O Jsonix lê o elemento que realmente está no XML (no exemplo, `<Artigo>`) e preenche só `artigo`; os outros 16 campos não aparecem no objeto resultante. Funciona sem surpresas.
3. **Escrita (JSON→XML) é o ponto frágil.** Nada no mapping gerado impede que dois campos sejam preenchidos ao mesmo tempo (ex. `artigo` e `caput` simultaneamente). O Jsonix não valida contra o XSD — ele só monta o XML conforme o mapping, então serializaria os dois como elementos irmãos, violando o `xsd:choice` real do schema. Esse erro só apareceria numa validação externa (XSD), não em tempo de execução do Jsonix.
4. Qualquer código que processe essa estrutura de forma genérica ("pegue o dispositivo revisado") precisa tratá-la como uma união entre os 17 nomes possíveis, não como um campo fixo — por exemplo, com um helper que retorna a primeira chave não-nula entre eles.
5. **Não há correção disponível no nível do schema, com o toolchain atual.** O JAXB tem uma customização padrão (`jaxb:property choiceContentProperty="true"`) que colapsaria as 17 alternativas num único campo tipado — testei aplicá-la em `RevisaoArticulacao` e o `jsonix-schema-compiler-full.jar` deste projeto rejeita o atributo (binding schema embutido não o suporta). Então o helper do item 4 tem que viver em `jsonix-lexml.js`, não no XSD.

## Fases

### Fase 0 — Consertar o toolchain de geração de mappings ✅ implementado
- ✅ `pom.xml` passou a incluir `schemas/lexedit.xsd` ([pom.xml:44](../pom.xml#L44)); o script `mappings:jsonix-compiler` do `package.json` já cobria via glob (`schemas/*.xsd`), então os dois agora compilam a mesma lista de schemas.
- ⏳ **Não resolvido**: o `ClassNotFoundException: javax.activation.DataSource` do `java -jar` direto (script npm) em JDK ≥ 9 continua existindo — é um problema pré-existente do toolchain, não introduzido por este trabalho. Contorno usado neste ambiente: rodar com **JDK 8** (`java -jar node_modules/jsonix/lib/jsonix-schema-compiler-full.jar -generateJsonSchema -d mappings schemas/lexml-simples.xsd schemas/lexedit.xsd schemas/math.xsd schemas/xlink.xsd schemas/xml.xsd`). O build "oficial" via `mvn exec:java` (usado no `Dockerfile`, JDK 11) não sofre disso porque o `pom.xml` já declara `javax.activation:activation:1.1.1` no classpath. Documentar esse requisito de JDK 8 para quem rodar `npm run build:mappings` localmente fica como item em aberto (ver "Riscos").

### Fase 1 — Gerar e revisar o mapping do `lexedit.xsd` ✅ implementado
- ✅ Mappings regenerados em `mappings/` (gitignorado, como já era o padrão do projeto) com JDK 8: `br_gov_lexml_lexedit__1.js`/`.jsonschema` novos, `br_gov_lexml__1.js` atualizado (propriedade `any` de `MetadadoProprietario` sem `allowTypedObject: false`, confirmado por inspeção do arquivo gerado).
- ✅ Binding de `RevisaoArticulacao` e `Autoria` revisado (ver seção dedicada) — `Autoria` funcionou sem surpresas no teste com a amostra (`tipo="Parlamentar"` com 2 `Parlamentar`).
- ✅ `simpleType`s (`Sexo`, `TipoAutoria`, `SiglaCasaLegislativa`) viraram atributos `string` simples no lado JS (sem enum JS dedicado, mas o valor passa direto — comportamento padrão do Jsonix para `xsd:simpleType` com `xsd:enumeration` de `xsd:string`).

### Fase 2 — Ligar o módulo `LexEdit` ao contexto em `jsonix-lexml.js` ✅ implementado
- ✅ [src/jsonix-lexml.js](../src/jsonix-lexml.js) agora importa `mappings/br_gov_lexml_lexedit__1.js` e inclui `LexEdit` no array de módulos do `Jsonix.Context`, com o prefixo `lexedit` registrado em `namespacePrefixes`.
- ✅ Forma real do objeto tipado, confirmada em runtime: `metadadoProprietario[].any[]` é uma lista de `{name: {namespaceURI, localPart, prefix, ...}, value: {...}}`; para o caso do lexedit, `any[0].value` é o objeto `br_gov_lexml_lexedit__1.Metadado` totalmente tipado (`aplicacao`, `autoria.parlamentares.parlamentar[]`, `comentarios.sequenciaComentario[]`, etc. — ver exemplo no [README.md](../README.md#metadados-proprietários-do-lexedit)).
- **Decisão tomada**: não foi adicionada nenhuma chave de conveniência extra (tipo `metadadoProprietario[i].lexedit`) — o formato padrão do Jsonix (`any[].name`/`any[].value`) já é suficiente e evita duplicar/mascarar a estrutura. Pode ser revisitado se o consumo da lib mostrar que vale a pena.
- ✅ `MetadadoProprietario` de outras origens: comportamento padrão do Jsonix com `processContents="lax"` (cai para DOM cru se não reconhecer o elemento) não precisou de código extra, como previsto.

### Fase 3 — Testes com a amostra ✅ implementado (parcialmente)
- ✅ [test.js](../test.js) (raiz do projeto, antes inexistente — `npm test` estava quebrado por não ter esse arquivo) faz round-trip semântico `toJSON → toXML → toJSON` com `assert.deepStrictEqual`, sobre `documento-articulado-exemplo.xml` e mais duas amostras pré-existentes (regressão). Roda com `npm test`.
- ✅ Asserções específicas sobre o bloco `lexedit`: `fonte`, `TYPE_NAME` tipado (não DOM), `autoria.parlamentares.parlamentar.length === 2`.
- ✅ **O ponto frágil do `RevisaoArticulacao` foi testado diretamente**: o teste verifica que `artigo` está preenchido e que os outros 16 campos do choice (`parte`, `livro`, ..., `p`) estão `undefined` depois do round-trip — cobre exatamente o risco descrito na seção dedicada.
- ⏳ **Não implementado**: fixture com `ColegiadoAutor` (só `Parlamentares` foi exercitado), fixture com outro nível do choice de `RevisaoArticulacao` (ex. `Paragrafo`), e validação formal contra os `.xsd` via `xmllint`/equivalente (não havia `xmllint`, `lxml` nem `pip` disponíveis neste ambiente para instalar). A verificação de equivalência ficou por igualdade estrutural do JSON (`toJSON(toXML(toJSON(xml))) === toJSON(xml)`), que é uma evidência forte mas não substitui validação de schema.
- `Comentarios` com as duas âncoras (dispositivo e span) e o `<NotaDeRodape>` como controle negativo foram observados manualmente no round-trip (ver saída em "Situação atual"), mas não têm asserção dedicada no `test.js` — poderia ser reforçado depois.

### Fase 4 — Documentação ✅ implementado
- ✅ [README.md](../README.md) ganhou a seção "Metadados proprietários do LexEdit" com exemplo do formato tipado.
- ✅ Este documento foi atualizado com o resultado real da Fase 2 (forma do objeto) e o status de cada fase.
- ⏳ `README.npm.md` não foi atualizado (é gerado a partir do `README.md` no `prepublish` via `readme:npm` — não precisa de edição manual separada, mas vale conferir no próximo publish).

## Riscos / itens em aberto
- O script npm `mappings:jsonix-compiler` continua exigindo JDK 8 (ou um classpath com `javax.activation` adicionado manualmente) — não foi corrigido nesta rodada, só documentado. Quem depender dele para gerar mappings localmente precisa saber disso.
- Fixtures adicionais não cobertos: `ColegiadoAutor` em `Autoria`, e um segundo nível do choice em `RevisaoArticulacao` (ex. `Paragrafo`) além de `Artigo`.
- Validação formal contra os `.xsd` (`lexml-simples.xsd` + `lexedit.xsd`) não foi feita por falta de ferramenta disponível no ambiente (`xmllint`, `lxml`) — a suite de testes hoje só garante equivalência semântica do JSON, não conformidade com o schema.
- Verificar se `processContents="lax"` não muda o comportamento de outros pontos de extensão do LexML que também usem padrão semelhante em `lexml-simples.xsd` (buscar outros `xsd:any` no schema além de `MetadadoProprietario`) — não foi feito.

## Critérios de aceite
- ✅ `npm run build:mappings` gera `br_gov_lexml_lexedit__1.js` e atualiza `br_gov_lexml__1.js` (testado com JDK 8; **não** reprodutível ainda com qualquer JDK ≥ 9 via `java -jar` direto — ver riscos).
- ✅ `toJSON(xml)` sobre a amostra produz um objeto onde o bloco `lexedit` aparece com campos nomeados (não XML serializado nem DOM), incluindo listas (`parlamentares`, `anexos`, `comentarios`, etc.) e atributos tipados (datas como objeto de data do Jsonix, booleanos como `boolean`).
- ✅ `toXML(toJSON(xml))` produz um XML semanticamente equivalente ao original — verificado por igualdade estrutural do JSON num segundo round-trip; **não** verificado ainda por validação formal contra `lexml-simples.xsd` + `lexedit.xsd`.
