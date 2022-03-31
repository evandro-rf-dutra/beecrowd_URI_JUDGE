// CONTAGEM DE CEDULAS - sequencial, sem estruturas de repetição e nem função.
//  As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1
// sempre deve ser fornecido o número mínimo de cedulas.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines[0]);
var resto = null;

var notas_100, notas_50, notas_20, notas_10,notas_5, notas_2;

// notas de 100
resto = parseFloat(( valor / 100 )).toFixed(2);

notas_100 = Math.trunc(resto); // pegando a parte inteira
valor = (valor - (notas_100 * 100)); // esta linha pode ser substituída pelo RESTO da divisão (%)

// notas 50
resto = parseFloat(( valor / 50 )).toFixed(2);

notas_50 = Math.trunc(resto); // parte inteira
valor = (valor - (notas_50 * 50));

// notas 20
resto = parseFloat(( valor / 20 )).toFixed(2);

notas_20 = Math.trunc(resto); // parte inteira
valor = (valor - (notas_20 * 20));

// notas 10
resto = parseFloat(( valor / 10 )).toFixed(2);

notas_10 = Math.trunc(resto); // parte inteira
valor = (valor - (notas_10 * 10));

// notas 5
resto = parseFloat(( valor / 5 )).toFixed(2);

notas_5 = Math.trunc(resto); // parte inteira
valor = (valor - (notas_5 * 5));

// notas 2
resto = parseFloat(( valor / 2 )).toFixed(2);

notas_2 = Math.trunc(resto); // parte inteira
valor = (valor - (notas_2 * 2));

console.log(lines[0]);
console.log(`${notas_100} nota(s) de R$ 100,00`);
console.log(`${notas_50} nota(s) de R$ 50,00`);
console.log(`${notas_20} nota(s) de R$ 20,00`);
console.log(`${notas_10} nota(s) de R$ 10,00`);
console.log(`${notas_5} nota(s) de R$ 5,00`);
console.log(`${notas_2} nota(s) de R$ 2,00`);
console.log(`${valor} nota(s) de R$ 1,00`);