var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(" ");

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

var maiorAB = (((A+B)+(Math.abs(A-B)))/2);
var maiorABC = (((maiorAB+C)+(Math.abs(maiorAB-C)))/2);

console.log(`${maiorABC} eh o maior`);