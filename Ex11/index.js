const prompt = require('prompt-sync')();

const num = prompt('Digite um número inteiro: ');

if (num % 2 === 0 ){
    console.log(`Seu número '${num}' é par.`);
} else{
    console.log(`Seu número '${num}' ímpar!`);
};