const fs = require('fs');

const Jsonix = require('jsonix').Jsonix;

const LexML = require('./br_gov_lexml__1.js').br_gov_lexml__1;

const MathML = require('./org_w3__1998_math_mathml.js').org_w3__1998_math_mathml;

const namespaces = {
    'http://www.w3.org/XML/1998/namespace' : 'xml', 
    'http://www.w3.org/1999/xlink': 'xlink', 
    'http://www.w3.org/2001/XMLSchema-instance' : 'xsi', 
    'http://www.lexml.gov.br/1.0': ''
};

const context = new Jsonix.Context([LexML,MathML],{ namespacePrefixes: namespaces });

const unmarshaller = context.createUnmarshaller();

const marshaller = context.createMarshaller();

const samples = fs.readdirSync('./samples');

const extRegex = /\.xml$/;

fs.mkdirSync('./json_results',{'recursive': true});
fs.mkdirSync('./xml_results',{'recursive': true});

samples.forEach(file => {
        console.log('Parsing: ' + file);
        try {
            unmarshaller.unmarshalFile('./samples/' + file, (data) => {
                const jsonFile = './json_results/' + file.replace(extRegex,'.json');
                fs.writeFile(jsonFile,JSON.stringify(data), (err) => { if (err) { throw err; }});
                const xmlFromJsonFile = './xml_results/' + file;
                const xml = marshaller.marshalString(data);
                fs.writeFile(xmlFromJsonFile,xml, (err) => { if(err) { throw err; } });
            });
        } catch (err) {
                console.log('Error in ' + file);
                console.log(err);
        }
    });

