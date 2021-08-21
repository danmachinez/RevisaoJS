const prompt = require('prompt-sync')();

let firstValue = prompt('Digite um valor: ');
let secondValue = prompt('Digite outro valor: ');

if (firstValue == secondValue) {
    console.log('Números iguais!')
} else if (firstValue > secondValue) {
    console.log(`O valor ${firstValue} é maior entre os dois!`)
} else {
    console.log(`O valor ${secondValue} é maior entre os dois!`);
}