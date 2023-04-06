/* 1120		Revisão de Contrato	String  */

var input = require('fs').readFileSync('STRINGS/stdin', 'utf8');
var lines = input.split(/\r\n|\n|\r/);
var linha;
var primeiro;

for (let index = 0; index < lines.length; index++) {
    linha = lines[index];
    primeiro = linha[0];

    //console.log(`Inteira linha : ${linha}`);

    if((primeiro ==='0') && (linha[2] === '0') && (linha.length == 3)) break;

    let regex = new RegExp(`[${primeiro}]|( )`,'g'); // primeiro número da linha e espaços em braco.
    linha = lines[index].replace(regex,""); // retorna a nova linha, sem o número especificado e sem o espaço em branco.
    
    //console.log(`Regex linha : ${linha}`);

    var teste = -1;
    //console.log(`tamanho Linha : ${linha.length}`);
    for(let i = 0 ; i< linha.length ; i++){ // retira os zeros do inicio ex: 00097 = 97
        
        //console.log(`FOR linha : ${linha[i]}`);
        if(linha[i] === '0'){
            teste = i;
        }
        else break;
    } 
    if(teste >= 0){
        linha = linha.substring(teste+1,linha.length);
    }

    //console.log(`Zeros linha : ${linha}`);

    if (linha ===''){
        console.log('0');
    }
    else{
        console.log(linha);
    }
}

