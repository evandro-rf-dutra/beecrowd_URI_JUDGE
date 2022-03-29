var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var x = parseFloat(lines[0]);
var y = parseFloat(lines[1]);

console.log(`${(x/y).toFixed(3)} km/l`);