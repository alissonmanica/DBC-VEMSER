// EXERCICIO 01

let confirmaSexta = confirm('Ja é sexta-feira?');

confirmaSexta 
? console.log('Sextou!') 
: console.log('Ainda não sextou');




// EXERCICIO 02

for (let i = 1; i <= 10; i++) {
    console.log(i);
}




// EXERCICIO 03

let lista = [1, 2, 7, 10, 18];
let soma = 0;

for (num of lista) {
    soma = soma + num
}
console.log(soma);




// EXERCICIO 04
let confirmaPergunta;
do {
    confirmaPergunta = parseInt(prompt('Selecione uma das opções:\n1 - Continuar perguntando \n2 - Parar de perguntar')); 
    if (confirmaPergunta !== 1 && confirmaPergunta !== 2) {
        alert('Erro! Opção invalida, selecione uma das duas opções, tente novamente!')
        confirmaPergunta = 1
    }
} while (confirmaPergunta === 1);
