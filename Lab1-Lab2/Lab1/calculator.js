const operation = require('./operations');
const validate = require('./operations/validators');

const params = process.argv.slice(2);

const operationIndex =params.findIndex(item=>item.startsWith('--'));

const currentOperation = params.splice(operationIndex,1).map(item => item.substring(2))[0];

const operands = params.map(n=>Number(n));

const func = operation[currentOperation];

validate(...operands);

console.log(func(...operands));



