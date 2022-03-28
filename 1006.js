var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

var media = (((A*2)+(B*3)+(C*5))/10);

console.log(` A = ${A}, B = ${B}, C = ${C} `); // String entre ACENTO GRAVE, e NÃO aspas duplas e nem simples. 
console.log(`MEDIA = ${media.toFixed(1)}`);