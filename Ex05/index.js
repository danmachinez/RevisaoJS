const prompt = require('prompt-sync')();

console.log('Cadastro de clientes:')
console.log('0 - Sair')
console.log('1 - Inserir')
console.log('2 - Alterar')
console.log('3 - Remover')
console.log('4 - Consultar')

const escolha = prompt('Escolha uma opção: ');

console.log(`Você escolheu a opção ${escolha}.`)