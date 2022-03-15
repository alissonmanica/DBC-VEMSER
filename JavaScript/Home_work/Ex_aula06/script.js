/*
  +================================================================+
  |                    SISTEMA DE COLABORADORES                    |
  +================================================================+
*/

//CLASSE MARCACAO DE PONTO
class Marcacao {
    dia;
    horas;

    constructor( dia, horas ) {
        this.dia = dia
        this.horas = horas.toFixed(2)
    }
}


//Função para marcar ponto
const marcacaoPonto = () => {
    let idResposta
    let procuraId;
    let continuaPonto;
    let diaPonto;
    let horasPonto;
    let validaDia;
    let validaHora;
    let cancelaPonto;

    do {
         idResposta = prompt('Digite o Id do Colaborador:');
            if (idResposta !== null) {
                procuraId = parseInt(idResposta)
                if (validator.validaId(procuraId)) {
                    let colaboradorParaMarcar = listaColaboradores.find( e => e.id === procuraId);

                    do {
                        let diaResposta = prompt('Digite o dia:');
                        if (diaResposta !== null) {
                            let diaMarcacao = parseInt(diaResposta)
                            if (validator.validaDia(diaMarcacao)) {
                                diaPonto = diaMarcacao;
                                validaDia = true;
                            } else {
                                alert('Erro! Digite um dia válido!')
                                validaDia = false;
                            }
                        } else {
                            break;
                        }
                    } while (validaDia === false);


                    do {
                        let horasResposta = prompt('Digite a hora:');
                        if (horasResposta !== null) {
                            let horasMarcacao = parseFloat(horasResposta)
                            if (validator.validaHora(horasMarcacao)) {
                                horasPonto = horasMarcacao;
                                validaHora = true;
                            } else {
                                alert('Erro! Digite uma hora válida!')
                                validaHora = false;
                            }
                        } else {
                            break;
                            
                        }
                    } while (validaHora === false);

                    if (validaHora === true && validaDia === true) {
                        const criaMarcacaoPonto = new Marcacao(diaPonto, horasPonto);
                
                        colaboradorParaMarcar.marcacoesPonto.push(criaMarcacaoPonto);
                        continuaPonto = true
                    } else {
                        break;
                    }
                } else {
                    alert('Id não encontrado!')
                    continuaPonto = false
                }
            } else {
                break;
            }   
    } while(continuaPonto === false);
}




//CLASSE COLABORADOR
class Colaborador { 
    id;
    nome;
    marcacoesPonto;

    constructor(id, nome, marcacoesPonto) {
        this.id = id;
        this.nome = nome;
        this.marcacoesPonto = marcacoesPonto;
    }
}

let listaColaboradores = [];


// Função para cadastrar um Colaborador
let i = 0;
const cadastrarColaborador = () => {
    let cadastroNome;
    let confirmaCadastro;

    do {
        cadastroNome = prompt('Digite o nome do colaborador:').toLowerCase();

        if(validator.validaNome(cadastroNome)) {
            if (validator.validaColaboradorNaLista(cadastroNome)) {
                 alert('Nome ja cadastrado!') ;
                 confirmaCadastro = false;
            } else {
                i++
                let listaPonto = [];
                const criaColaborador = new Colaborador(i, cadastroNome, listaPonto);
                listaColaboradores.push(criaColaborador);
                confirmaCadastro = true;
            }
        } else {
            alert('Erro! Digite um nome válido!');
            confirmaCadastro = false;
        }
    } while(confirmaCadastro === false);
   
}




//CLASSE VALIDAÇÔES
class Validacoes {
    validaNome = (nome) => {
        if(nome.toLowerCase() !== nome.toLowerCase().toUpperCase() && nome.length > 2) {
            return true;
        } else {
            return false;
        }
    };

    validaDia = (dia) => {
        if (!isNaN(dia) && dia > 0 && dia <= 31) {
            return true;
        } else {
            return false;
        }
    };

    validaHora = (hora) => {
        if (!isNaN(hora) && hora >= 0 && hora <= 23) {
            return true;
        } else {
            return false;
        }
    };

    validaId = (id) => {
        if (listaColaboradores.find( e => e.id === id)) {
            return true;
        } else {
            return false;
        }
    };

    validaColaboradorNaLista = (colaborador) => {
        if(listaColaboradores.find( e => e.nome === colaborador)) {
            return true;
        } else {
            return false;
        }
    };


    validaPontosMarcados = (listaDePonto) => {
        if(listaDePonto.length === 0) {
            return true
        } else {
            return false
        }
    }
}

const validator = new Validacoes();




//Função imprime colaboradores sem ponto marcado
const colabSemPonto = () => {
    let listaSemPonto = listaColaboradores.filter( e => e.marcacoesPonto.length === 0);
    if(validator.validaPontosMarcados(listaSemPonto)) {
        alert('Todos os colaboradores marcaram o ponto!')
    } else {
        console.table(listaSemPonto)
    }
}




// MENU DE OPÇÔES
let opcaoMenu;

do {
opcaoMenu = prompt('Digite uma das opções: \n 1 - Cadastrar Colaborador; \n 2 - Marcar Ponto; \n 3 - Ver Lista de Colaboradores; \n 4 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto; \n 9 - Encerrar;')

switch(opcaoMenu) {
    case '1':
        cadastrarColaborador()
        break;
    
    case '2':
        marcacaoPonto()
        break;

    case '3':
        console.table(listaColaboradores)
        break;

    case '4':
        colabSemPonto()
        break;

    case '9':
        break;

    case null:
        break;

    default:
        alert('Erro! Digite uma das opções disponíveis no menu!')
}
} while(opcaoMenu !== '9' && opcaoMenu !== null)