//Consversão de Função

//1) Versão Tradicional
/*
function getNomeCompleto(primeiro, ultimo) {
    return primeiro + ' ' + ultimo;
}
*/
let primeiro = 'Lucas';
let segundo = 'Pereira';

const setNomeCompleto = (primeiro, ultimo) => primeiro + ' ' + ultimo;
console.log(setNomeCompleto(primeiro, segundo));

//2) Versão com "return" explícito
/*
const isMaiorDeIdade = (idade) => {
    return idade >= 18;
};
*/

let idade = 19; 

const isMaiorDeIdade = (idade) => idade >= 18;
console.log(isMaiorDeIdade(idade));

