const prompt = require('prompt-sync')();

console.log('*********************************')
console.log('BEM VINDO A CASA DE CÂMBIO DO DAN')
console.log('*********************************')

const valorInserido = prompt('Digite um valor em real para ser convertido R$(XXX.XX): ')

const dolar = valorInserido / 5.385
const euro = valorInserido / 6.301
const libraEsterlina = valorInserido / 7.337
const dolarCanadense = valorInserido / 4.197
const pesoArg = valorInserido / 0.055
const pesoChi = valorInserido / 0.007

console.log(`O valor de R$${valorInserido} em Dólares é: US$ ${dolar.toFixed(2)}.`)

console.log(`O valor de R$${valorInserido} em Euros é: € ${euro.toFixed(2)}.`)

console.log(`O valor de R$${valorInserido} em Libras é: £ ${libraEsterlina.toFixed(2)}.`)

console.log(`O valor de R$${valorInserido} em Dólares Canadenses é: CA$ ${dolarCanadense.toFixed(2)}.`)

console.log(`O valor de R$${valorInserido} em Pesos Argentinos é: $ ${pesoArg.toFixed(2)}.`)

console.log(`O valor de R$${valorInserido} em Pesos Chilenos é: $ ${pesoChi.toFixed(2)}.`)