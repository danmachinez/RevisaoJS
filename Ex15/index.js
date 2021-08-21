const prompt = require('prompt-sync')();

let salario = prompt('Digite o salário a ser realizado o aumento: R$ ');

if (salario <= 280){
    percentualDoAumento = 20
} else if (salario <= 700){
    percentualDoAumento = 15
} else if (salario <= 1500){
    percentualDoAumento = 10
} else if (salario > 1500){
    percentualDoAumento = 5
};

console.log(`Seu salário antes do reajuste era de: R$ ${salario}.`)
console.log(`O percentual de aumento a ser aplicado é de ${percentualDoAumento}%. `)

percentualDoAumento = percentualDoAumento / 100;
aumento = percentualDoAumento * salario;
novoSalario = salario + aumento;

console.log(`O aumento foi de R$ ${aumento.toFixed(2)}.`);
console.log(`O novo salário com o valor ajustado é de R$ ${novoSalario.toFixed(2)}.`);