const COLAB_DIV_CLASS = [ 'mt-3','w-50','p-3','border','border-primary','rounded','d-flex','align-items-center','justify-content-evenly' ]
const BTN_CLASS = [ 'p-3','d-flex','align-items-center','justify-content-center' ]
const BTN_CHECK_I_CLASS = [ 'fas', 'fa-check', 'text-success', 'fs-20' ]
const BTN_REMOVER_I_CLASS = [ 'fas', 'fa-trash', 'text-secondary', 'fs-20' ]
const SPAN_CLASS = [ 'fs-22' ] // bg-success

const TITULO_LISTA = 'Colaboradores';
const TITULO_LISTA_VAZIA = 'Nenhum colaborador cadastrado ainda';

/*
  <div id="colab-1" class="mt-3 w-50 p-3 border border-primary rounded d-flex align-items-center justify-content-evenly">
      <button id="btn-check-1" class="p-3 d-flex align-items-center justify-content-center">
          <i id="btn-check-i-1" class="fas fa-check text-success fs-20"></i>
      </button>

      <span id="span-1" class="fs-22">Nome: Colaborador 1</span>

      <button id="btn-remover-1" class="p-3 d-flex align-items-center justify-content-center">
          <i id="btn-remover-i-1" class="text-secondary fas fa-trash fs-20"></i>
      </button>
  </div>
*/

let idSistema = 0;

const adicionarAtributos = (elemento, id, classes) => {
  elemento.setAttribute('id', id);
  elemento.classList.add(...classes);
}

const cadastrarColaborador = () => {
  const divContainer = document.getElementById('container');

  const id = ++idSistema;

  const titulo = document.getElementById('titulo-lista');
  titulo.textContent = TITULO_LISTA;

  const divCriada = document.createElement('div');
  adicionarAtributos(divCriada, `colab-${id}`, COLAB_DIV_CLASS);

  const btnCheck = document.createElement('button');
  adicionarAtributos(btnCheck, `btn-check-${id}`, BTN_CLASS);

  btnCheck.addEventListener('click', confirmarColaborador);

  const iconeCheck = document.createElement('i');
  adicionarAtributos(iconeCheck, `btn-check-i-${id}`, BTN_CHECK_I_CLASS);

  btnCheck.appendChild(iconeCheck);

  const input = document.getElementById('nome-input');
  
  const span = document.createElement('span');
  adicionarAtributos(span, `span-${id}`, SPAN_CLASS);

  span.textContent = input.value;
  input.value = '';

  const btnRemover = document.createElement('button');
  adicionarAtributos(btnRemover, `btn-remover-${id}`, BTN_CLASS);

  const iconeRemover = document.createElement('i');
  adicionarAtributos(iconeRemover, `btn-remover-i-${id}`, BTN_REMOVER_I_CLASS);

  btnRemover.addEventListener('click', removerColaborador);
  
  btnRemover.appendChild(iconeRemover);
  
  divCriada.append(btnCheck, span, btnRemover);
  
  divContainer.appendChild(divCriada);
}

const confirmarColaborador = (event) => {
  const id = event.target.id;
  const idSplit = id.split('-');
  const idElemento = idSplit[idSplit.length - 1];

  const divColab = document.getElementById(`colab-${idElemento}`);
  const iconeCheck = document.getElementById(`btn-check-i-${idElemento}`);

  iconeCheck.classList.toggle('fa-check');
  iconeCheck.classList.toggle('text-success');
  iconeCheck.classList.toggle('fa-times');
  iconeCheck.classList.toggle('text-danger');

  divColab.classList.toggle('bg-success');

}

const removerColaborador = (event) => {
  const id = event.target.id;
  const idSplit = id.split('-');
  const idElemento = idSplit[idSplit.length - 1];

  const divColab = document.getElementById(`colab-${idElemento}`);
  const container = document.getElementById('container');
  container.removeChild(divColab);

  idSistema--;
  const titulo = document.getElementById('titulo-lista');
  titulo.textContent = !idSistema ? TITULO_LISTA_VAZIA : titulo.textContent;
}


const programa = () => {
  const btnCadastro = document.getElementById('btn-cadastro');
  btnCadastro.addEventListener('click', cadastrarColaborador);
}


programa();