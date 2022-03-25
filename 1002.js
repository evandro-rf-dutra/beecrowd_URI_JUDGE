var input = require('fs').readFileSync('stdin', 'utf8'); // readFileSync('/dev/stdin', 'utf8') no URI o diretório é diferente.
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var π = 3.14159;
var raio = parseFloat(input);
area = (π * (raio * raio));

console.log("A="+area.toFixed(4));