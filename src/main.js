#!/usr/bin/env node

const { program } = require('commander');
const fsPromises = require('fs/promises');
const conversor = require('./jsonix-lexml.js');

const {stdin} = process;

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

async function runToJSON(source,options) {
    const input = await getInput(source);    
    const data = conversor.toJSON(input);
    const res = JSON.stringify(data) ;
    const output = options.output ? options.output : "-";
    await writeOutput(output,res);
}

async function runToXML(source,options) {
    const input = await getInput(source);
    const data = JSON.parse(input);
    const res = conversor.toXML(data);
    const output = options.output ? options.output : "-";
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
