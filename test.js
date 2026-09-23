const assert = require("assert");
const fs = require("fs");
const path = require("path");
const conversor = require("./src/jsonix-lexml.js");

function roundTrip(xml) {
  const json1 = conversor.toJSON(xml);
  const xml2 = conversor.toXML(json1);
  const json2 = conversor.toJSON(xml2);
  assert.deepStrictEqual(json1, json2, "toJSON(toXML(toJSON(xml))) deve ser igual a toJSON(xml)");
  return json1;
}

function testDocumentoArticuladoLexedit() {
  const xml = fs.readFileSync(
    path.join(__dirname, "samples/documento-articulado-exemplo.xml"),
    "utf8"
  );
  const json = roundTrip(xml);

  const metadadoProprietario = json.value.metadado.metadadoProprietario[0];
  assert.strictEqual(metadadoProprietario.fonte, "http://www.lexml.gov.br/lexedit/1.0");

  // O conteúdo de MetadadoProprietario (ponto de extensão xsd:any) precisa vir
  // como objeto tipado (br_gov_lexml_lexedit__1.Metadado), não como DOM cru —
  // depende de processContents="lax" em lexml-simples.xsd e do módulo LexEdit
  // estar carregado no mesmo Jsonix.Context.
  const lexeditMetadado = metadadoProprietario.any[0].value;
  assert.strictEqual(lexeditMetadado.TYPE_NAME, "br_gov_lexml_lexedit__1.Metadado");
  assert.strictEqual(lexeditMetadado.aplicacao, "LexEdit");
  assert.strictEqual(lexeditMetadado.autoria.parlamentares.parlamentar.length, 2);

  // RevisaoArticulacao é um xsd:choice achatado em 17 propriedades possíveis;
  // aqui só "artigo" deve estar preenchido.
  const revisaoArticulacao =
    lexeditMetadado.revisoesArticulacao.revisaoArticulacao[0];
  assert.ok(revisaoArticulacao.artigo, "campo 'artigo' do choice deveria estar preenchido");
  assert.strictEqual(revisaoArticulacao.artigo.id, "_art4-exc1");
  const outrosCamposDoChoice = [
    "parte", "livro", "titulo", "subtitulo", "capitulo", "secao", "omissis",
    "subsecao", "agrupamentoHierarquico", "caput", "paragrafo", "inciso",
    "alinea", "item", "dispositivoGenerico", "p",
  ];
  for (const campo of outrosCamposDoChoice) {
    assert.strictEqual(
      revisaoArticulacao[campo],
      undefined,
      `campo '${campo}' do choice não deveria estar preenchido junto com 'artigo'`
    );
  }

  console.log("testDocumentoArticuladoLexedit: OK");
}

function testAmostrasExistentesContinuamFuncionando() {
  const amostras = [
    "senado.federal#projeto.decreto.legislativo=pds#2017=1.xml",
    "congresso.nacional#medida.provisoria=mpv#LEXML_URN_ID.xml",
  ];
  for (const nome of amostras) {
    const xml = fs.readFileSync(path.join(__dirname, "samples", nome), "utf8");
    roundTrip(xml);
  }
  console.log("testAmostrasExistentesContinuamFuncionando: OK");
}

testDocumentoArticuladoLexedit();
testAmostrasExistentesContinuamFuncionando();

console.log("Todos os testes passaram.");
