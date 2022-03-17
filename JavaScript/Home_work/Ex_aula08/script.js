const UL_CLASS = ["w-50", "border", "border-primary", "rounded", "flex-column", "d-flex", "align-items-center", "justify-content-center"]
const LI_CLASS = ["w-100", "mt-2", "p-3", "d-flex", "align-items-center", "justify-content-between"]

const TITULO_COLAB_VAZIO = 'Nenhum colaborador cadastrado ainda'
const TITULO_COLAB = 'Colaboradores'



const divPai = document.getElementById('div-pai')


const nomeValor = document.getElementById('nome-input')
const dataValor = document.getElementById('data-input')
const emailValor = document.getElementById('email-input')
const senhaValor = document.getElementById('senha-input')


let idSistema = 0;



// TROCA TITULO DA LISTA
const tituloDaLista = () => {
  const tituloColab = document.getElementById('titulo-colab');
  if (idSistema === 0) {
      tituloColab.textContent = TITULO_COLAB_VAZIO;
  } else {
      tituloColab.textContent = TITULO_COLAB;
  }
}


let listaColaboradores = [];

class Colaboradores {
  id;
  nome;
  data;
  email;

    constructor(id, nome, data, email) {
      this.id = id;
      this.nome = nome;
      this.data = data;
      this.email = email;
    }
}


//ADICIONA ATRIBUTOS
const adicionarAtributos = (elemento, id, classes) => {
  elemento.setAttribute('id', id);
  elemento.classList.add(...classes);
}



//CRIA O NOME NA LISTA DO HTML
const criarNome = (li, id) => {
  const criarDiv = document.createElement('div');

  const Paragrafo = document.createElement('p');
  Paragrafo.textContent = 'Nome:';
  

  const ParagrafoSec = document.createElement('p');
  ParagrafoSec.textContent = nomeValor.value
  nomeValor.value = '';

  ParagrafoSec.setAttribute('id', `nome-colab${id}`);

  criarDiv.append(Paragrafo, ParagrafoSec);
  li.appendChild(criarDiv);
}


//CRIA DATA NA LISTA DO HTML
const criarData = (li, id) => {
  const criarDiv = document.createElement('div');

  const Paragrafo = document.createElement('p');
  Paragrafo.textContent = 'Nascimento:';

  const ParagrafoSec = document.createElement('p');
  ParagrafoSec.textContent = dataValor.value
  dataValor.value = '';

  ParagrafoSec.setAttribute('id', `data-colab${id}`);

  criarDiv.append(Paragrafo, ParagrafoSec)
  li.appendChild(criarDiv);
}


//CRIA EMAIL NA LISTA DO HTML
const criarEmail = (li, id) => {
  const criarDiv = document.createElement('div');

  const Paragrafo = document.createElement('p');
  Paragrafo.textContent = 'Email:'

  const ParagrafoSec = document.createElement('p');
  ParagrafoSec.textContent = emailValor.value
  emailValor.value = '';

  ParagrafoSec.setAttribute('id', `email-colab${id}`);

  criarDiv.append(Paragrafo, ParagrafoSec)
  li.appendChild(criarDiv) 
}


//CRIA A LISTA DE COLABORADORES DO HTML E O PRÓPRIO COLABORADOR
const criarColaborador = () => {
  const id = ++idSistema

  tituloDaLista();

  const criarColaboradores = new Colaboradores(id, nomeValor.value, dataValor.value, emailValor.value);
  listaColaboradores.push(criarColaboradores);

  const criarUl = document.createElement('ul')
  adicionarAtributos(criarUl, `colab${id}`, UL_CLASS );

  const criarLi = document.createElement('li')
  adicionarAtributos(criarLi, `list-colab${id}`, LI_CLASS);

  const nome = criarNome(criarLi, id);
  
  const data = criarData(criarLi, id);

  const email = criarEmail(criarLi, id);

  criarUl.append(criarLi)
  divPai.appendChild(criarUl)

  senhaValor.value = '';
}





// --------------------------------------------------------------------------------------------------

// VALIDAR NOME

const validarNome = () => {
  const nomeInput = document.getElementById('nome-input');
  const nome = nomeInput.value;
  const nomeSplit = [...nome];

  const verificaNome = nomeSplit.some( c => c.toLowerCase() === c.toUpperCase() && c !== ' ');
  

  const nomeErro = document.getElementById('nome-erro');

  const ehValido = !verificaNome;
  ehValido ? nomeErro.classList.add('d-none') : nomeErro.classList.remove('d-none');
  return ehValido;
}





// VALIDAR EMAIL

const validarEmail = () => {
    
  const emailInput = document.getElementById('email-input');
  const email = emailInput.value;
  const emailSplit = email.split('');

  const conferePrimeiroChar = emailSplit[0].toLowerCase() !== emailSplit[0].toUpperCase();

  const contemArroba = email.includes('@');
  
  const contemPonto = email.includes('.');
  
  const naoTerminaComPonto = emailSplit[emailSplit.length-1] !== '.';

  const incluirDominioDbc = email.includes('dbccompany');

  const pontoAntesDeChar = emailSplit.lastIndexOf('.') <= emailSplit.length-3;

  const pontoDepoisDoArroba = emailSplit.indexOf('@') < emailSplit.lastIndexOf('.');

  const arrobaComPonto = email.includes('@.');

  const emailErro = document.getElementById('email-erro');

    const ehValido = conferePrimeiroChar && contemArroba && contemPonto && naoTerminaComPonto && incluirDominioDbc && pontoAntesDeChar && pontoDepoisDoArroba && !arrobaComPonto
    ehValido ? emailErro.classList.add('d-none') : emailErro.classList.remove('d-none');
    return ehValido;
}


// VALIDAR SENHA
const validarSenha = (event) => {
    
    const input = event ? event.target : document.getElementById('senha-input');
    const { value: senha } = input;

    input.value = input.value.replaceAll(' ', '');

    let caracteresSenha = [...senha];

    let possuiLetraMinuscula = caracteresSenha.some( c => c.toLowerCase() === c);
    let possuiLetraMaiuscula = caracteresSenha.some( c => c.toUpperCase() === c);

    let possuiEspecial = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && isNaN(c));
    let possuiNumero = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && !isNaN(c));

    let peloMenosOito = senha.length >= 8;


    const senhaErro = document.getElementById('senha-erro');

    const ehValido = possuiLetraMinuscula && possuiLetraMaiuscula && possuiEspecial && possuiNumero && peloMenosOito;
    ehValido ? senhaErro.classList.add('d-none') : senhaErro.classList.remove('d-none');
    return ehValido;
}



// MASCARA DA DATA
const adicionarMascaraData = (input) => {
  // aqui vamos adicionar uma máscara ao input

  let data = document.getElementById("data-input").value;
  data = data.replaceAll("/", "");
  let dia = data.substring( 0, 2);
  let mes = data.substring( 2, 4);
  let ano = data.substring(4);

  let dataNumeros = [...data];

  if(dataNumeros.length === 2){
    document.getElementById("data-input").value = `${dia}/`
  } else if(dataNumeros.length === 5){
    document.getElementById("data-input").value = `${dia}/${mes}/${ano}`
  }
}


// VALIDAR DATA
const validarData = () => {

  const dataAtual = moment();

  const dataId = document.getElementById('data-input');

  let dataInput = dataId.value;

  const data = moment(dataInput, 'DD/MM/YYYY');

  const maiorDe18 = new Date(moment().subtract(18, 'years'));

  const menorDe26 = new Date(moment().subtract(26, 'years'));

  const dataValida = data.isValid();

  const confereData = data.isBetween(menorDe26, maiorDe18);

  const dataPassada = dataAtual.isAfter(data);

  const dataErro = document.getElementById('data-erro');

  const ehValido = dataValida && confereData && dataPassada; 
  ehValido ? dataErro.classList.add('d-none') : dataErro.classList.remove('d-none');
 return ehValido;
}



//VALIDAR CADASTRO
const validarCadastro = (event) => {
  event.preventDefault();
  if (validarData() && validarEmail() && validarSenha()) {
   criarColaborador() 
   alert('Cadastro realizado com sucesso!') ;
  } else 
    alert('Digite os campos corretamente!');
}


// PRINTA NO CONSOLE OS COLABORADORES
const visualizarColaboradores = (event) => {
  event.preventDefault();
  for (let i = 1; i <= listaColaboradores.length; i++) {
  let nomeColab = document.getElementById(`nome-colab${i}`).textContent;
  let dataColab = document.getElementById(`data-colab${i}`).textContent;
  let emailColab = document.getElementById(`email-colab${i}`).textContent;
  console.log(`Nome: ${nomeColab} | Nascimento: ${dataColab} | Email: ${emailColab}`);
  }
}