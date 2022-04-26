var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let contadorPositivos = 0;
let somador = 0;
let atual = 0;

for(let i=0 ; i<lines.length ; i++){
    atual = parseFloat(lines[i]); // String para float
    if(atual > 0){ // positivos
        contadorPositivos++;
        somador += atual;
    }
}
somador = (somador / contadorPositivos);
console.log(`${contadorPositivos} valores positivos`);
console.log(`${somador.toFixed(1)}`);

