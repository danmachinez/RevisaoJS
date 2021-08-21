const prompt = require('prompt-sync')();
const lista = [];

do {
    let numero = prompt('Digite um número: ');
    const contem = lista.find(elem => elem == numero);
    if (contem == undefined) {
        lista.push(numero);
    };
    var resp = prompt('Deseja insirar mais números? [S/N]').toUpperCase()[0];
} while (resp == 'S');
console.log(lista)

