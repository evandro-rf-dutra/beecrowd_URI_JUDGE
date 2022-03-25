var input = require('fs').readFileSync('stdin', 'utf8'); // readFileSync('/dev/stdin', 'utf8') no URI o diretório é diferente.
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

 var A = parseFloat(lines[0]);
 var B = parseFloat(lines[1]);
 var media = (((A * 3.5) + (B * 7.5))/11);
 
 console.log("MEDIA = " + media.toFixed(5));