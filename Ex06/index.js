const prompt = require('prompt-sync')();

const vidaMostro = prompt('Digite um valor entre 10 e 50 para ser a vida do monstro: ')
const valorAtaque = prompt('Digite um valor entre 5 e 10 para ser a potência de seu ataque: ')

const turnosNecessarios = Math.ceil(vidaMostro / valorAtaque);

console.log(`Serão necessários ${turnosNecessarios} turnos para derrotar o monstro!`)