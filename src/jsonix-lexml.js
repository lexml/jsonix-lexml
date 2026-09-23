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

const context = new Jsonix.Context([LexML, MathML, LexEdit], {
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
