const phrase = "Nome: João Silva | IDade: 28 | Email: joao.silva@gmail.com";

//Verifica se tem email
let temEmail = phrase.includes("Email");

let nomeCompleto = phrase.slice(6, 16);

let idade = parseInt(phrase.slice(26, 28));

//pega o email completo da string
let email = phrase.slice(38);

//Verifica se tem o domínio de email
let dominioEmail = phrase.includes("@gmail.com");

//separa o primeiro nome
let primeiroNome = nomeCompleto.split(" ")[0];

//frase final
console.log(primeiroNome + " tem " + idade + " anos e seu email é: " + email);