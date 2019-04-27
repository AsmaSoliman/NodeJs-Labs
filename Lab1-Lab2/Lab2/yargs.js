const operation = require('../Lab1/operations');
const validate = require('../Lab1/operations/validators');
const yargs = require('yargs');

const params = process.argv.slice(2);

const operationIndex =params.findIndex(item=>item.startsWith('--'));

const currentOperation = params.splice(operationIndex,1).map(item => item.substring(2))[0];

const func = operation[currentOperation];

console.log(argv);

const {argv} =yargs.array('add');

const operands = argv.add.map(n=>Number(n));

validate(...operands);

console.log(func(...operands));


