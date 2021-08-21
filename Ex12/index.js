const prompt = require('prompt-sync')();

let value = prompt('Digite um valor diferente de "0": ');

if (value == 0){
    console.log('Numéro inválido!')
} else if (value > 0) {
    console.log(`O valor ${value} é positivo!`);
} else {
    console.log(`O valor ${value} é negativo!`);
}