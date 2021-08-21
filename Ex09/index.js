const prompt = require('prompt-sync')();

const anoNascimento = prompt('Digite o ano de seu nascimento: ');

const anoAtual = 2021

const idade = anoAtual - anoNascimento;
console.log(`Você tem ${idade} anos! Olha, está na flor da idade ein!`)