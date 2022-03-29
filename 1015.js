var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(/[\n\ ]/); // EXPRESSÃO REGULAR: quebra de linha e espaço em branco.

var x1 = parseFloat(lines[0]);
var y1 = parseFloat(lines[1]);
var x2 = parseFloat(lines[2]);
var y2 = parseFloat(lines[3]);


console.log( (Math.sqrt( (Math.pow( x2-x1,2)) + (Math.pow( y2-y1 ,2)) )).toFixed(4) );