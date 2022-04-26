var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let contadorPositivos = 0;
let atual = 0;

for(let i=0 ; i<lines.length ; i++){
    atual = parseFloat(lines[i]); // String para float
    if(atual > 0){ // positivos
        contadorPositivos++;
    }
}
console.log(`${contadorPositivos} valores positivos`);