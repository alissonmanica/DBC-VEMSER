// 1) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
//     Esse funcionário foi contratado em 2016, com salário inicial de R$1000,00;
//     A cada ano o funcionário recebe um aumento de 1,5% sobre seu salário inicial;
//     A partir de 2018, os aumentos salariais sempre passaram a ser o dobro do percentual do ano anterior
//     Faça um programa que determine imprima o salário desse funcionário com o passar dos anos até o ano atual;
let anoAtual = 2022;
let anoAumento = 2018;;
let salarioInicial = 1000.00;
let aumento = 1.5/100

for (anoInicial = 2016; anoInicial < anoAtual; anoInicial ++) {
    if (anoInicial < anoAumento) {
        salarioInicial += (salarioInicial * aumento);
    } else {
        aumento *= 2
        salarioInicial += (salarioInicial * aumento);
    }
     console.log (`O salário com o aumento no ano de ${anoInicial} é de R$${salarioInicial}`);
};





// 2) Faça um programa que calcule a soma dos primeiros 50 números pares;
let soma = 0;

for ( let cont = 1; cont <= 100; cont++) {
    if (cont % 2 == 0) {
        soma += cont;
        console.log(soma);
    }
}





// 3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;
let tabuada = parseInt(prompt('Digite o número da tabuada que desejas:'));
let total = 0;
for (let i = 1; i <= 10; i++) {
    total = (tabuada * i);
    console.log(`${tabuada} x ${i} = ${total}`);
}





// 4) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100;
let quadradoPares = 0;

for ( let cont = 1; cont <= 100; cont++) {
    if (cont % 2 == 0) {
        quadradoPares = cont * cont;
        console.log(quadradoPares);
    }
}





// 5) Faça um algoritmo que imprima no console os valores como se fosse um relógio durante 1 minuto;
// 	Exemplo do console:
// 	00 // note que é 00 e não apenas 0
// 	01 // note que é 01 e não apenas 1
// 	02 // note que é 02 e não apenas 2
// 	03 // note que é 03 e não apenas 3
// 	...
// 	58
// 	59
// 	60 (aqui é para parar de imprimir)
let fst = 0;
let sec = 0;

let intervalo = setInterval(
                    function() {
                        console.log(`${fst}${sec}`)
                        sec++
                        if (sec === 10) {
                            sec = 0
                            fst++
                        } else if (fst === 6) {
                            clearInterval(intervalo);
                        }
                    },1000
                );




                
// 6) Pergunte ao usuário se ele quer:
// 	Inserir número / Finalizar
// 	Ao selecionar inserir número solicite para o usuário um valor numérico válido
// 	Ao selecionar finalizar mostre um alerta para o usuário com o resultado da soma de todos os números informados
// 	Utilize o laço DO...WHILE;
let solicitUser;
let resultUser = 0;
let somaTotal = 0;

do {
    solicitUser = parseInt(prompt('Você deseja:\n 1 - Inserir número\n 2 - Finalizar'));

    switch(solicitUser) {
        case 1: 
            resultUser = parseFloat(prompt('Digite um número válido:'));
            break;
        case 2:
            alert(`O resultado da soma foi: ${somaTotal}`);
            break;
        default: alert('Erro! Digite uma das opções disponíveis!');
            break;
    }
    somaTotal += resultUser
} while (solicitUser !== 2)