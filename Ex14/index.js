const prompt = require('prompt-sync')();

let nota = prompt('Digite a nota do aluno: ');

if (nota >= 0 && nota <= 10){
    if (nota < 6){
        console.log(`Sua nota foi ${nota} e o conceito foi F, melhore!`)
    }else if (nota < 7){
        console.log(`Sua nota foi ${nota} e o conceito foi D!`)
    } else if(nota < 8){
        console.log(`Sua nota foi ${nota} e o conceito foi C!`)
    } else if(nota < 9){
        console.log(`Sua nota foi ${nota} e o conceito foi B!`)
    } else{
        console.log(`Sua nota foi ${nota} e o conceito foi um belo A!`)
    }
}