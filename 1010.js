var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(/[\n\ ]/); // EXPRESSÃO REGULAR: quebra de linha e espaço em branco.

console.log(`VALOR A PAGAR: R$ ${((lines[1] * lines[2])+(lines[4] * lines[5])).toFixed(2)}`);
// OBSERVAÇÃO: neste caso não foi preciso converter com o PARSE