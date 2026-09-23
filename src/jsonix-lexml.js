const Jsonix = require("jsonix").Jsonix;
const LexML = require("../mappings/br_gov_lexml__1.js").br_gov_lexml__1;
const MathML = require("../mappings/org_w3__1998_math_mathml.js").org_w3__1998_math_mathml;
const LexEdit = require("../mappings/br_gov_lexml_lexedit__1.js").br_gov_lexml_lexedit__1;

const namespaces = {
  "http://www.w3.org/XML/1998/namespace": "xml",
  "http://www.w3.org/1999/xlink": "xlink",
  "http://www.w3.org/2001/XMLSchema-instance": "xsi",
  "http://www.lexml.gov.br/1.0": "",
  "http://www.lexml.gov.br/lexedit/1.0": "lexedit",
};

// Datas (xsd:date, xsd:dateTime) ficam no json como a string original do xml,
// preservando o timezone, em vez do objeto de calendário padrão do Jsonix.
// No toXML, objetos Date e objetos de calendário (formato antigo) ainda são
// aceitos e formatados pelos tipos do Jsonix.
const tipoDataComoString = (original, comoDate) => new (Jsonix.Class(Jsonix.Schema.XSD.String, {
  name: original.name,
  typeName: original.typeName,
  print: function (value, context, output, scope) {
    if (Jsonix.Util.Type.isString(value)) {
      return value;
    }
    const tipo = Jsonix.Util.Type.isDate(value) ? comoDate : original;
    return tipo.print(value, context, output, scope);
  },
  CLASS_NAME: 'JsonixLexml.' + original.name + 'ComoString',
}))();

const Context = Jsonix.Class(Jsonix.Context, {
  registerBuiltinTypeInfos: function () {
    Jsonix.Context.prototype.registerBuiltinTypeInfos.apply(this);
    const XSD = Jsonix.Schema.XSD;
    this.registerTypeInfo(tipoDataComoString(XSD.DateTime.INSTANCE, XSD.DateTimeAsDate.INSTANCE));
    this.registerTypeInfo(tipoDataComoString(XSD.Date.INSTANCE, XSD.DateAsDate.INSTANCE));
  },
});

const context = new Context([LexML, MathML, LexEdit], {
  namespacePrefixes: namespaces,
});

const unmarshaller = context.createUnmarshaller();

const marshaller = context.createMarshaller();

// a entrada é uma string xml
const toJSON = xml => unmarshaller.unmarshalString(xml);

// a entrada é um objeto json
const toXML = json => marshaller.marshalString(json);

module.exports = {
    toJSON,
    toXML,
}
