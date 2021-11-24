#!/usr/bin/env node

const Jsonix = require('jsonix').Jsonix;

const LexML = require('./mappings/br_gov_lexml__1.js').br_gov_lexml__1;

const MathML = require('./mappings/org_w3__1998_math_mathml.js').org_w3__1998_math_mathml;

const namespaces = {
    'http://www.w3.org/XML/1998/namespace' : 'xml', 
    'http://www.w3.org/1999/xlink': 'xlink', 
    'http://www.w3.org/2001/XMLSchema-instance' : 'xsi', 
    'http://www.lexml.gov.br/1.0': ''
};

const context = new Jsonix.Context([LexML,MathML],{ namespacePrefixes: namespaces });

const unmarshaller = context.createUnmarshaller();

const marshaller = context.createMarshaller();

const {stdin} = process;

const { program } = require('commander');

const fsPromises = require('fs/promises');


async function getStdin() {
	let result = '';

	if (stdin.isTTY) {
		return result;
	}

	stdin.setEncoding('utf8');

	for await (const chunk of stdin) {
		result += chunk;
	}

	return result;
}


async function readFile(fileName) {
	const fh = await fsPromises.open(fileName,'r');
	const data = await fh.readFile('utf8');
	await fh.close();
	return data;
}

async function getInput(path) {	
	if (path == '-') {
		return await getStdin();
	} else {
		return await readFile(path);
	}
}

async function writeOutput(path,output) {
	if(path == '-') {
		console.log(output);
	} else {
		const fh = await fsPromises.open(path,'w');
		await fh.writeFile(output,'utf8');
	}
}

async function toJSON(inPath,outPath) {
   const input = await getInput(inPath);  
   const data = unmarshaller.unmarshalString(input);
   const res = JSON.stringify(data) ;
   await writeOutput(outPath,res);
}

async function toXML(inPath,outPath) {
   const input = await getInput(inPath);  
   const data = JSON.parse(input);
   const res = marshaller.marshalString(data);
   await writeOutput(outPath,res);
}

async function runToJSON(source,options) {
	       const output = options.output ? options.output : "-";
	       const input = await getInput(source);
   	       const data = unmarshaller.unmarshalString(input);
   	       const res = JSON.stringify(data) ;
 	       await writeOutput(output,res);
}

async function runToXML(source,options) {
	       const output = options.output ? options.output : "-";
	       const input = await getInput(source);
   	       const data = JSON.parse(input);
   	       const res = marshaller.marshalString(data);
 	       await writeOutput(output,res);
}

async function main() {
program.version('0.0.1');	

program.command('tojson')
       .description('converte um documento no formato XML do LexML Brasil para formato JSON')
       .argument('[source]','arquivo de entrada, ou "-" para entrada padrão','-')
       .option('-o, --output <dest>','grava documento JSON em arquivo especificado, ou saída padrão, se "dest" for "-"','-')
       .action(runToJSON);

program.command('toxml')
       .description('converte um documento no JSON para formato XML do LexML Brasil')
       .argument('[source]','arquivo de entrada, ou "-" para entrada padrão','-')
       .option('-o, --output <dest>','grava documento XML em arquivo especificado, ou saída padrão, se "dest" for "-"','-')
       .action(runToXML);

await program.parseAsync(process.argv);

}

main()
