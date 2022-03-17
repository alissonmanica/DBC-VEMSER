const validarEmail = () => {
    /* 
        adicionar um eventListener para o evento "onkeyup" do input email-input que terá como ação esta função de validarEmail
        deve validar as seguintes regras:
        1 - obrigatório ter uma letra como primeiro caractér;
        2 - obrigatório possuir um '@';
        3 - obrigatório possuir pelo menos um '.' (ponto) depois do '@' e não podem estar juntos, ex: email@.ig // inválido pois o ponto está junto do arroba;
        4 - não pode terminar com '.' (ponto), ex: "email@pessoal.";
        5 - deve ter pelo menos duas letras depois de um '.' (ponto), ex: "email@pessoal.c" // inválido pois tem somente o 'c' depois do '.';
        6 - deve possuir o domínio 'dbccompany'
        obs: caso o email (value) que está no input for válido/inválido deverá alterar a span com id="email-erro" para fique com um display visível ou invisível (dependendo da situação)
    */

  const emailInput = document.getElementById('email-input')
  const email = emailInput.value
  const emailSplit = email.split('')

  const conferePrimeiroChar = emailSplit[0].toLowerCase() !== emailSplit[0].toUpperCase()

  const contemArroba = email.includes('@')
  
  const contemPonto = email.includes('.')
  
  const naoTerminaComPonto = emailSplit[emailSplit.length-1] !== '.'

  const incluirDominioDbc = email.includes('dbccompany')

  const pontoAntesDeChar = emailSplit.lastIndexOf('.') <= emailSplit.length-3

  const pontoDepoisDoArroba = emailSplit.indexOf('@') < emailSplit.lastIndexOf('.')

  const arrobaComPonto = email.includes('@.')

  const emailErro = document.getElementById('email-erro')

    const ehValido = conferePrimeiroChar && contemArroba && contemPonto && naoTerminaComPonto && incluirDominioDbc && pontoAntesDeChar && pontoDepoisDoArroba && !arrobaComPonto
    ehValido ? emailErro.classList.add('d-none') : emailErro.classList.remove('d-none')
    return ehValido;
}


const validarSenha = (event) => {
    /* 
      adicionar um eventListener para o evento "onkeyup" do input senha-input que terá como ação esta função de validarSenha
      deve validar as seguintes regras:
      1 - obrigatório ter ao menos uma letra minúscula;
      2 - obrigatório ter ao menos uma letra maiúscula;
      3 - obrigatório ter ao menos um número;
      4 - obrigatório ter ao menos um carácter especial;
      5 - obrigatório ter ao menos 8 caractéres;
      6 - a senha não pode conter espaços em branco;

      obs: caso a senha (value) que está no input for válido/inválido deverá alterar a span com id="senha-erro" para fique com um display visível ou invisível (dependendo da situação)
    */
    const input = event ? event.target : document.getElementById('senha-input');
    const { value: senha } = input;

    input.value = input.value.replaceAll(' ', '');

    let caracteresSenha = [...senha];

    let possuiLetraMinuscula = caracteresSenha.some( c => c.toLowerCase() === c);
    let possuiLetraMaiuscula = caracteresSenha.some( c => c.toUpperCase() === c);

    let possuiEspecial = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && isNaN(c));
    let possuiNumero = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && !isNaN(c));

    let peloMenosOito = senha.length >= 8;


    const senhaErro = document.getElementById('senha-erro')

    const ehValido = possuiLetraMinuscula && possuiLetraMaiuscula && possuiEspecial && possuiNumero && peloMenosOito;
    ehValido ? senhaErro.classList.add('d-none') : senhaErro.classList.remove('d-none')
    return ehValido;
}


const adicionarMascaraData = (input, data) => {
  // aqui vamos adicionar uma máscara ao input
}


const validarData = () => {
/* 
  adicionar um eventListener para o evento "onkeyup" do input data-input que terá como ação esta função de validarSenha
  deve validar as seguintes regras:
  1 - deve ser uma data válida;
  2 - não pode ser uma data futura;
  3 - deve ser uma data entre 18 e 26 anos; (idade > 18)
  obs: caso o email (value) que está no input for válido/inválido deverá alterar a span com id="data-erro" para fique com um display visível ou invisível (dependendo da situação)
*/


  const dataAtual = moment()

  const dataId = document.getElementById('data-input')

  let dataInput = dataId.value

  let mascaraData = dataInput.substr( 0, 2 )
  dataInput.replace(mascaraData, '/')
  console.log(dataInput)

  const data = moment(dataInput, 'DD/MM/YYYY')

  const maiorDe18 = new Date(moment().subtract(18, 'years'))

  const menorDe26 = new Date(moment().subtract(26, 'years'))

  const dataValida = data.isValid()

  const confereData = data.isBetween(menorDe26, maiorDe18)


  const dataPassada = dataAtual.isAfter(data)

  

  const dataErro = document.getElementById('data-erro')


  const ehValido = dataValida && confereData && dataPassada; 
  ehValido ? dataErro.classList.add('d-none') : dataErro.classList.remove('d-none')
 return ehValido;
}



const validarCadastro = (event) => {
  event.preventDefault();
  console.log(`Cadastro ${validarData() && validarEmail() && validarSenha() ? 'válido!' : 'inválido'}`);
}