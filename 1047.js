var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

function restoDiv(){
    // resto da div
    r = (r / 60);
    horasF = Math.trunc(r); // retirando a parte inteira (numero de horas)
    r = r - horasF;
    r = r * 60; // resto da div, parte fracionaria x 60 = numero de minutos que durou a partida
}

let h1 = ((lines[0] * 60) + parseInt(lines[1])); // hora 1 - hora em que começou o jogo, convertida em minutos.
let h2 = ((lines[2] * 60) + parseInt(lines[3])); // hora em que terminou o jogo.
let r = 0.0; // variavel ira servir de auxiliar, e no final vai conter o numero de minutos que durou o jogo
let horasF = 0; // numero de horas que durou o jogo. pode ser de 0 até 24.

if(h2 > h1){ // jogo terminou no mesmo dia, hora 2 é maior que hora 1, situação normal.
    
    r = (h2 - h1);
    restoDiv();
}
else if(h2 < h1){ // o jogo começou em um dia e terminou no outro. mas com duração menor que 24 h

    let r2 = 1440 - h1; // 24 horas possuem 1440 minutos
    r = (r2 + h2);
    restoDiv();
}
else { // A hora do início, e a hora do fim são iguais, então o jogo durou 24h.... OBS: o jogo deve pelo menos ter duração de 1 min.
    horasF = 24;
    r = 0;
}

console.log(`O JOGO DUROU ${horasF} HORA(S) E ${r.toFixed(0)} MINUTO(S)`);