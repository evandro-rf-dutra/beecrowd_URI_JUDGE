var input = require('fs').readFileSync('stdin', 'utf8'); // readFileSync('/dev/stdin', 'utf8') no URI o diretório é diferente.
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

 var A = parseInt(lines[0]);
 var B = parseInt(lines[1]);
 var PROD = A*B;
 
 console.log("PROD = "+PROD);