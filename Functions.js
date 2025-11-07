console.log(anonima());

//Expressão de Função, iguala-se a uma variável e coloca-se um ";" no final. Não pode ser chamada antes da sua criação
const saudacao = function() {
    return 'Olá, como você está?';
};
console.log(saudacao());

//Função declarada, pode ser chamada antes de ser criada como lá em cima
function anonima() {
    return 'Sou o retorno da função';
}

let a = 4, b = 2;

//Arrow function, o mais usado e mais moderno tipo de Função
const minhaFuncao = () => {};

//Essa é uma Arrow Function (que também é uma Expressão de Função)
const multiplicar = (a, b) => {
    return a * b;
}

//Se a função for apenas uma linha de retorno não precisa colocar as {}
const dividir = (a, b) => a / b;


//Ainda existe outro tipo de função mais específico, a IIFE ou Expressão de Função Invocada Imediatamente.
//É uma função que você define e executa no exato momento em que ela é criada.
//Essa é a forma clássica de declarar esse tipo de função:
(function() {
    // Esta variável 'segredo' SÓ EXISTE aqui dentro.
    var segredo = "Estou 100% seguro aqui dentro";
    var numero = 123;

    console.log(segredo); // Funciona
})();

// O código aqui fora não faz ideia do que é a variável 'segredo'.
console.log(segredo); // ERRO! segredo is not defined
//Essa prática era usada para criar um escopo privado para o "var" não vazar do escopo da função

//Forma mais moderna com Arrow Function
(() => {
    let segredo = 'Também estou seguro aqui'
    console.log("IIFE com Arrow Function executada!");
})();

//Nos dias de hoje com o let e const é só usar um bloco:
{
    let segredo = "Estou seguro num bloco";
}
//console.log(segredo); //ERRO!