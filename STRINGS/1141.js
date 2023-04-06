/* beecrowd 1141 - cultivando Strings */

var input = require('fs').readFileSync('STRINGS/stdin', 'utf8');
var lines = input.split(/\r\n|\n|\r/);

exibeLines();



function exibeLines(){
    for (let index = 0; index < lines.length; index++) {
        console.log(`[${index}]  ${lines[index]}`); 
    }
}