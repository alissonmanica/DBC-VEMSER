/*
  +================================================================+
  |                    SISTEMA DE COLABORADORES                    |
  +================================================================+

  Colaborador {
    id;
    nome;
    marcacoesPonto; (um array de marcações, ex: [ { dia: 22, horas: 9 }, { dia: 23, horas: 7 } ]);
    
    marcarPonto( dia, hora );
  };

  Marcacao {
    dia; (só um number mesmo, ex: 22 )
    horas; (também só um number, ex: 9)
  }

  1 - Cadastrar Colaborador;
  2 - Marcar Ponto;
  3 - Ver Lista de Colaboradores;
  4 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;
  9 - Encerrar;
*/

class Validacoes {
  valorEstaPresente(valor) {
    return (valor !== '' && valor !== null && valor !== undefined);
  }

  validaNumero(valor) {
    return !isNaN(valor) && this.valorEstaPresente(valor);
  }
}

// convenção de const para valores fixos do sistema
const MENSAGEM_MENU = `
  Escolha a opção desejada:
  1 - Cadastrar Colaborador;
  2 - Marcar Ponto;
  3 - Ver Lista de Colaboradores;
  4 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;
  9 - Encerrar;
`; 

const validador = new Validacoes();

let idSistema = 1;
let colaboradores = [];

class Colaborador {
  id = 0;
  nome = '';
  marcacoesPonto = [];

  constructor(nome) {
    this.id = idSistema++;
    this.nome = nome;
  }
  
  marcarPonto( dia, hora ) { 
    const marcacao = new Marcacao( dia, hora );
    this.marcacoesPonto.push(marcacao);
  }
};

class Marcacao {
  dia; 
  horas;

  constructor(dia, horas) {
    this.dia = dia;
    this.horas = horas;
  }
}

const cadastrarColaborador = () => {
  const nome = prompt('Informe o nome do colaborador:');

  if(!validador.valorEstaPresente(nome)) {
    alert('Nome inválido, digite alguma coisa.')
    return cadastrarColaborador();
  }

  const colab = new Colaborador(nome);
  colaboradores.push(colab);
  console.log('Sucesso!')
}

const verificaMarcacaoInvalida = (valor) => {
  if(!validador.validaNumero(valor)) {
    alert('Valor inválido, digite alguma coisa.')
    return true;
  }
}

const marcarPonto = () => {
  const idColab = parseInt(prompt('Informe o id do colaborador:'));

  if(verificaMarcacaoInvalida(idColab))
    return marcarPonto();

  const dia = parseInt(prompt('Informe o dia:'));
  if(verificaMarcacaoInvalida(dia))
    return marcarPonto();

  const horas = parseFloat(prompt('Informe as horas:'));
  if(verificaMarcacaoInvalida(horas))
    return marcarPonto();

  const colaborador = colaboradores.find( c => c.id === idColab );
  colaborador.marcarPonto(dia, horas);
}

const listarColaboradores = () => {
  console.log('Lista de colaboradores => ');
  colaboradores.forEach( c => {
    console.log(c);
  });
}

const listarSemPonto = () => {
  const colaboradoresSemPonto = colaboradores.filter( c => c.marcacoesPonto.length === 0 );

  console.log('Lista de colaboradores sem ponto => ');
  colaboradoresSemPonto.forEach( c => {
    console.log(c);
  });
}

const menu = () => {
  let opcao = prompt(MENSAGEM_MENU);

  switch(opcao) {
    case '1':
      cadastrarColaborador();
      break;
    case '2':
      marcarPonto();
      break;
    case '3':
      listarColaboradores();
      break;
    case '4':
      listarSemPonto();
      break;
    case '9': case null:
      return;
    default:
      alert('Opção inválida');
  }

  menu();
}



// inicio o sistema
menu();

































































































































// class Validacoes {
//     valorPresente(valor) {
//       const estaPresente = (valor !== null && valor !== undefined && valor !== '');

//       if(!estaPresente) {
//         alert("Valor informado inválido");
//       }
      
//       return estaPresente;
//     }
// }

// const validador = new Validacoes();

// class Marcacao {
//     dia = 0;
//     hora = 0;

//     constructor( dia, hora ) { // É opcional
//         this.dia = dia;
//         this.hora = hora;
//     }
// }

// class Colaborador {
//     id = 0;
//     nome = '';
//     marcacoesPonto = [];

//     constructor(id, nome) {
//         this.id = id;
//         this.nome = nome;
//     }
    
//     marcarPonto( dia, hora ) {
//         const marcacaoCriada = new Marcacao( dia, hora );
//         this.marcacoesPonto.push(marcacaoCriada);
//     }
// };


// let listaDeColaboradores = [];
// let idSistema = 0;

// const findColaborador = id => {
//   return listaDeColaboradores.find( c => c.id === id );
// }

// const cadastrarColaborador = () => {
//   const nomeColaborador = prompt('Informe o nome do colaborador:');
//   const colaborador = new Colaborador(++idSistema, nomeColaborador);
//   listaDeColaboradores.push(colaborador);
//   console.log('Colaborador cadastrado => ', colaborador);
// }

// const marcarPonto = () => {
//   const idColaborador = parseInt(prompt('Informe o id do colaborador para marcar o ponto.'));
//   const dia = parseInt(prompt('Informe o dia da marcação.'));
//   const hora = parseInt(prompt('Informe quantas horas.'));

//   const colaborador = findColaborador(idColaborador);

//   const marcacaoNova = new Marcacao(dia, hora);
//   colaborador.marcacoesPonto.push(marcacaoNova);

//   console.log('Colaborador => ', colaborador);
// }

// const listarColaboradoresQueNaoMarcaramPonto = () => {
//   const colaboradoresSemPonto = listaDeColaboradores.filter( c => c.marcacoesPonto.length === 0 );
//   console.log('colaboradoresQueNaoMarcaramPonto => ');
//   colaboradoresSemPonto.forEach( c => console.log(c));
// }

// const listarColaboradores = () => {
//   console.log('lista de colaboradores => ');
//   listaDeColaboradores.forEach( c => console.log(c) );
// }

// const menu = () => {
//     let opcao = prompt(`Escolha a opção desejada: 1 - Cadastrar Colaborador 2 - Cadastrar Projeto; 3 - Alocar Colaborador; (à algum projeto) 4 - Desalocar Colaborador; 5 - Marcar Ponto; 6 - Ver Lista de Colaboradores Sem Projeto; 7 - Ver Lista de Projetos Sem Colaboradores; 8 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto; 9 - Ver Lista de Colaboradores e Projetos; 10 - Encerrar Execução do Sistema;`);

//     switch(opcao) {
//         case '1':
//           cadastrarColaborador();
//           menu();
//           break;
//         case '2':
//           marcarPonto();
//           menu();
//           break;
//         case '3':
//           listarColaboradores();    
//           menu();
//           break;
//         case '8':
//           listarColaboradoresQueNaoMarcaramPonto();    
//           menu();
//           break;
//         case '9':
//           return;
//         default:
//           console.log('Opção inválida');
//           menu();
//           break;
//     }
// }

// // escopo global do código
// menu();