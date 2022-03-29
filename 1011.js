var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines[0]);
var pi = 3.14159;

var volume = ((4/3.0) * pi * (Math.pow(R,3))); // raio ao cubo, sintaxe disponível em versões mais recentes R**3

console.log(`VOLUME = ${volume.toFixed(3)}`);