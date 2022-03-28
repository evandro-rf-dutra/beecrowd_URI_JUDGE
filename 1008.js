var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var numero = parseInt(lines[0]);
var horas = parseInt(lines[1]);
var valor = parseFloat(lines[2]);

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${(horas * valor).toFixed(2)}`);
