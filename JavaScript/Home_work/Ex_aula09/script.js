

  class Colaborador {
    id; 
    nome;
    dataNascimento;
    email;
    senha;

      constructor(nome, dataNascimento, email, senha) {
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.email = email
        this.senha = senha
      }
}

//#region VALIDAR NOME
function capitalize(texto) {
  let textoMinusculo = texto.toLowerCase();
  let separarLetras = textoMinusculo.split(" ");
  for (let i = 0; i < separarLetras.length; i++) {
    let corte = separarLetras[i];
    let primeiraLetra = corte[0];
    corte = primeiraLetra.toUpperCase() + corte.slice(1);

    separarLetras[i] = corte;
  }
  return separarLetras.join(" ");
}


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
//#endregion VALIDAR NOME

//#region Validação Email
const validarEmail = () => {
  let emailDigitado = document.getElementById('email-input-registration').value;
  let listaCaracteres = emailDigitado.split(''); // [...emailDigitado]

  let emailSplit = emailDigitado.split('@');
  
  let possuiArroba = emailSplit.length > 1;

  let dominioEmail = possuiArroba ? emailSplit[1] : '';
  let dominioEmailSplit = dominioEmail.split('.');

  let possuiPontosNoDominio = dominioEmailSplit.length > 1;

  let possuiCaracteresEntrePontos = dominioEmailSplit.every( d => d.length > 1 );

  let comecaComLetra = listaCaracteres.length ? listaCaracteres[0].toUpperCase() !== listaCaracteres[0].toLowerCase() : false;

  let ehValido = possuiArroba && possuiPontosNoDominio && possuiCaracteresEntrePontos && comecaComLetra;

  // para setar o texto de erro em vermelho
  let erroEmail = document.getElementById('email-registration-error');
  erroEmail.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

  return ehValido;
}
//#endregion Validação Email

//#region Validação Senha
const validarSenha = () => {
  let senhaDigitada = document.getElementById('password-input-registration').value;
  let listaCaracteres = senhaDigitada.split('');

  let letras = listaCaracteres.filter( char => char.toLowerCase() !== char.toUpperCase() );

  let possuiLetraMaiuscula = letras.some( l => l.toUpperCase() === l ); // "A".toUppercase() === "A"
  let possuiLetraMinuscula = letras.some( l => l.toLowerCase() === l );

  let possuiCharEspecial = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)) );
  let possuiNumero = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)) );

  let possuiOitoCaracteres = senhaDigitada.length >= 8;

  let naoPossuiEspacos = !senhaDigitada.includes(' ');

  let ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula && 
      possuiCharEspecial && possuiNumero && naoPossuiEspacos;

  // para setar o texto de erro em vermelho
  let erroSenha = document.getElementById('password-registration-error');
  erroSenha.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

  return ehValido;
}
//#endregion Validação Senha

//#region Validação Data
const validarData = () => { 
  let inputData = document.getElementById('date-input-registration');
  let dataDigitada = inputData.value;

  adicionarMascaraData(inputData, dataDigitada);

  let dataConvertida = moment(dataDigitada, 'DDMMYYYY');

  let dezoitoAnosAtras = moment().diff(dataConvertida, 'years') >= 18;

  // comparações de data - date1.isBefore(date2)  /  date1.isAfter(date2)  /  date1.isSameOrBefore(date2)  /  date1.isSameOrAfter(date2)
  let dataAnteriorHoje = dataConvertida.isBefore(moment());

  let ehValido = dataConvertida.isValid() && dataAnteriorHoje && dezoitoAnosAtras && dataDigitada.length === 10; // 10/05/2001

  // para setar o texto de erro em vermelho
  let erroData = document.getElementById('date-registration-error');
  erroData.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

  return ehValido;
}

const adicionarMascaraData = (input, data) => {
  let listaCaracteres = [...data];
  
  let listaFiltrada = listaCaracteres.filter(c => !isNaN(parseInt(c)));
  if(listaFiltrada && listaFiltrada.length) {
      let dataDigitada = listaFiltrada.join('');

      const { length } = dataDigitada;

      switch(length) { 
          case 0: case 1: case 2:
              input.value = dataDigitada; 
              break;
          case 3: case 4:
              input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(2, 4)}`;
              break;
          default:
              input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(2, 4)}/${dataDigitada.substring(4, 8)}`;
      }
  }
}
//#endregion Validação Data


const alternarClasses = (elemento, ...classes) => {
  classes.forEach( classe => {
    elemento.classList.toggle(classe);
  });
}


const irPara = (origem, destino) => {
  const elementoOrigem = document.getElementById(origem);
  const elementoDestino = document.getElementById(destino);

  alternarClasses(elementoOrigem, 'd-none', 'd-flex');
  alternarClasses(elementoDestino, 'd-none', 'd-flex');
}



const validarLogin = () => {
  const validaEmail = document.getElementById('email-input-login').value
  const validaSenha = document.getElementById('password-input-login').value
  axios.get(`http://localhost:3000/colaboradores`).then((sucesso) => {
    const emailValido = sucesso.data.find( elemento => elemento.email === validaEmail && elemento.senha === validaSenha)
    emailValido ? irPara('login', 'home') : alert('Email ou Senha inválido!')
  }).catch((erro) => {
    console.log(`${erro}, Ops, algo deu errado, por favor aguarde!`)
  })
};

const listarUsuarios = () => {
  const limpaUl = document.getElementById('user-list')
  limpaUl.textContent = ''
  // aqui entra lógica de GET para os usuários
  axios.get(`http://localhost:3000/colaboradores`)
  .then( (sucesso) => {
    sucesso.data.forEach( elemento => {
      const li = document.createElement('li');
      li.textContent = elemento.nome;
      const userList = document.getElementById('user-list');
      userList.append(li)
    } )
  }).catch((erro) => {
    console.log(`${erro}, Ops, algo deu errado, por favor aguarde!`)
  });
};



const validarCadastro = (event) => {
  event.preventDefault()
  let cadastroValido = validarData() && validarEmail() && validarSenha() && validarNome();
  cadastroValido ? alert('Cadastro realizado com sucesso!') : alert('Erro! Confira os campos de cadastro!');

  if(cadastroValido) {
    cadastrarUsuario(event);
  }
}


const excluirColaborador = () => {
  
}

const cadastrarUsuario = (event) => {
  event.preventDefault();
  let campoNome = document.getElementById("nome-input").value;
  let campoData = document.getElementById("date-input-registration").value;
  let campoEmail = document.getElementById("email-input-registration").value;
  let campoSenha = document.getElementById("password-input-registration").value;
  let nomeFormatado = capitalize(campoNome)
  const colaborador = new Colaborador (nomeFormatado, campoData, campoEmail, campoSenha);

  const colaboradorAlterado = { nome: 'Nome lá do input que foi alterado' };


  // AQUI PARA BAIXO SÃO SÓ EXEMPLOS DE COMO UTILIZAR O AXIOS

  // // PARA PUT E DELETE PRECISAMOS PASSAR TAMBÉM UM ID 
  // axios.put(`http://localhost:3000/colaboradores/1`, colaboradorAlterado)
  //   .then( (sucesso) => {
  //     debugger
  //   }, (erro) => {
  //     debugger
  //   } );


  // // DELETE exemplo
  // axios.delete(`http://localhost:3000/colaboradores/1`)
  //   .then( (sucesso) => {
  //     debugger
  //   }, (erro) => {
  //     debugger
  //   } );


  axios.post(`http://localhost:3000/colaboradores`, colaborador)
    .then( (sucesso) => {
      // data possui o objeto inserido, no caso do post
      sucesso.data.id

      const li = document.createElement('li');
      li.setAttribute('id', `colab-${sucesso.data.id}`);
      
    }).catch((erro) => {
      console.log(`${erro}, Ops, algo deu errado, por favor aguarde!`)
    });
};


