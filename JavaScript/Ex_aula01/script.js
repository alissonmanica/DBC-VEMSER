// EXERCÍCIO 01

let respostaDoUsuario = prompt('Digite SIM ou Não:');

if(respostaDoUsuario === 'SIM') {
  alert('Parabéns!');
} else if(respostaDoUsuario === 'Não') {
  alertaUsuario = prompt('Digite algum texto:')
  alert(alertaUsuario);
} else {
  confirm('Você tem noções dos seus atos?');
}






// EXERCÍCIO 02

let cliente = prompt('Digite o nome do cliente:');
let atendente = prompt('Digite o nome do(a) Atendente que você deseja:');

alert(`Olá ${cliente} eu me chamo ${atendente}, em que posso ajudar?`);






// EXERCÍCIO 03

let isFriday = confirm('Hoje é sexta-feira?');
let isTwoGreaterThanFour = (2 < 4);
let isValueEmpty

let result = prompt('Digite algo:');

if(result === null || result === undefined || result === '') {
  isValueEmpty = true
} else {
  isValueEmpty = false
}






// EXERCÍCIO 04

let n1 = parseInt(prompt('Digite o primeiro número:'));
let n2 = parseInt(prompt('Digite o segundo número:'));
let operador = (prompt('Digite o operador(+, -, *, /):'));
let resultado = 0;

if(!isNaN(n1) && !isNaN(n2)) {
  switch(operador) {
    case '+': 
      resultado = (n1 + n2);
      break; 
    case '-': 
      resultado = (n1 - n2);
      break;
    case '*':
      resultado = (n1 * n2);
      break;
    case '/':
      if(n1 !== 0 && n2 !== 0) {
        resultado = (n1 / n2);
      } else {
        alert('Erro! Escolha um número diferente de 0 para dividir!');
      }
      break;
    default: 
      alert('Erro! Escolha um operador válido!');
  }
  alert(`${n1} ${operador} ${n2} = ${resultado}`);
} else {
  alert('Ops, algo deu errado! Escolha um número válido.');
}





// EXERCÍCIO 05

let T1 = parseFloat(prompt('Digite a 1º nota:'));
let T2 = parseFloat(prompt('Digite a 2º nota:'));
let P1 = parseFloat(prompt('Digite a nota da prova:'));
let media = 0

if(!isNaN(T1) && !isNaN(T2) && !isNaN(P1)) {
  media = (T1 + T2 + P1) / 3

  if(media < 5) {
    alert('Infelizmente você foi Reprovado!');
  } else if(media >= 5 && media <= 7) {
    alert('Você está em Recuperação!');
  } else {
    alert('Parabéns, você foi Aprovado!');
  }
} else {
  alert('Erro! Digite apenas números!');
}





// EXERCÍCIO 06

let menu = parseInt(prompt(`Olá, seja bem vindo(a)! Escolha uma das opções abaixo: \n 1 - Fazer checkin \n 2 - Fazer checkout \n 3 - Estender hospedagem \n 4 - Sair`));

switch (menu) {
  case 1:
    alert('Boas Vindas!');
    break;
  case 2:
    let confirmacao = confirm('Você tem certeza?');
    if(confirmacao === true) {
      alert('Até logo, volte sempre que quiser!');
    }
    break;
  case 3:
    tempoDeHospedagem = parseInt(prompt('Por quantos dias você gostaria de estender a hospedagem?'));
    if(!isNaN(tempoDeHospedagem) && tempoDeHospedagem !== 0) {
      alert(`Operação realizada com sucesso!, você estendeu o tempo de hospedagem em ${tempoDeHospedagem} dias.`);
    } else {
      alert('Erro! Digite um número válido!');
    }
    break;
  case 4: 
    alert('Ok!');
    break;
  default: 
    alert('Opção inválida, tente novamente!');
}


























