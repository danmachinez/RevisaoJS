const prompt = require('prompt-sync')();

console.log('Olá! Aconteceu um crime aqui na cidade hoje a noite e estou encarregado de investigar. Lhe farei algumas perguntas e peço que as responda com sinceridade.')

const perg1 = prompt('Você telefonou para a vítima? [S/N]');
const perg2 = prompt('Esteve no local do crime? [S/N]');
const perg3 = prompt('Mora perto da vítima? [S/N]');
const perg4 = prompt('Você devia algo para a vítima? [S/N]');
const perg5 = prompt('Já trabalhou com a vítima? [S/N]');

let respostas = 0

if (perg1 === 's' || perg1 === 'S'){
    respostas++;
}
if (perg2 === 's' || perg2 === 'S'){
    respostas++;
}
if (perg3 === 's' || perg3 === 'S'){
    respostas++;
}
if (perg4 === 's' || perg4 === 'S'){
    respostas++;
}
if (perg5 === 's' || perg5 === 'S'){
    respostas++;
}

if (respostas == 2){
    console.log('Você é suspeito do crime, não saia da cidade, entraremos em contato!')
} else if (respostas == 3 || respostas == 4){
    console.log('Você é cúmplice do crime!')
} else if (respostas == 5){
    console.log('VOCÊ É O ASSASSINO, ESTÁ PRESO!')
} else {
    console.log('Você é inocente, pode ir!')
}