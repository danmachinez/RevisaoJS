const prompt = require('prompt-sync')();

const nome = prompt('Qual o seu nome completo? ');
const endereco = prompt('Qual o seu endereço? ');
const cep = prompt('Qual o seu CEP? ');
const telefone = prompt('Qual o seu telefone? ');

console.log(`Seu nome é: ${nome}.`);
console.log(`Seu endereço é: ${endereco}.`);
console.log(`Seu cep é: ${cep}.`);
console.log(`Seu telefone é: ${telefone}.`);	
