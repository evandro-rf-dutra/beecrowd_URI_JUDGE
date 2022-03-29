var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(" ");

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

console.log("TRIANGULO: "+ ((A*C)/2).toFixed(3));
console.log("CIRCULO: "+ ((3.14159)*(C*C)).toFixed(3));
console.log("TRAPEZIO: "+ (((A+B)/2)*C).toFixed(3));
console.log("QUADRADO: "+ (B*B).toFixed(3));
console.log("RETANGULO: "+ (A*B).toFixed(3));
