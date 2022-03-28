var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var nome = lines[0];
var salario = parseFloat(lines[1]);
var totalVendas = parseFloat(lines[2]);

console.log(`NOME = ${nome}`);
console.log(`TOTAL = R$ ${(((totalVendas*15) / 100)+salario).toFixed(2)}`);
