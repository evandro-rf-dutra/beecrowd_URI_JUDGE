// 1024		Criptografia	Manipulação String	nivel:5 //

var input = require('fs').readFileSync('stdin', 'utf8');
var lines =  input.split(/\r\n|\n|\r/); // cada sistema possui uma tabulação de quebra de linha diferente
var cript="";

var qtdLinhas = parseInt(lines[0]);

for (let index = 1; index <= qtdLinhas; index++) {

    cript = incrementaCodigoASCII(lines[index]);
    cript = decrementaCodigoASCII(cript);
    console.log(`${cript}`);

}

/*
  * função que recebe uma String, e retorna o tamanho truncado dela.
*/
function tamanhoTruncado(palavra){
    return Math.trunc((palavra.length)/2);
}

/*
    recebe uma palavra e decrementa uma posição a esquerda de
    todas as letras que estão na metade em diante da palavra.
 */
function decrementaCodigoASCII(palavra){

    var retorno = "";
    var aux = "";
    var element;
    var tam = tamanhoTruncado(palavra);

    for(let i = 0 ; i<palavra.length ; i++){

      if(i>=tam){
        element = palavra.charCodeAt(i);
        aux = String.fromCharCode(element - 1); // decrementa o codigo ascii em 1 posicão a esquerda.
        retorno += aux;
      }
      else{
        retorno += palavra[i]; // poderia ser utilizado: String.substring(i,f)
      }
    }

    return retorno;
}

/**
 * funcao que recebe uma palavra,
 * incrementa o codigo ascii de todas as letras maiusculas e minusculas em 3 posicoes.
 * retorna uma nova string com os devidos caracteres incrementados, mas retorna a String invertida.
 */
function incrementaCodigoASCII(palavra){

    var retorno = "";
    var aux;

    for (let index = 0; index < palavra.length; index++) {
      const element = palavra.charCodeAt(index);
      if((element>=65 && element<91) || (element>=97 && element<123)){
            aux = String.fromCharCode(element+3); // incrementa o codigo ascii para 3 posicoes a frente.
      }
      else{
        aux = palavra[index]; // recebe o caractere sem alteracao
      }
      //retorno = retorno.concat(aux); // concatena no final da string de retorno
      retorno = aux + retorno; // concatena no inicio da string de retorno;
    }

    return retorno;

}