let qtdeClicks = 0;

const incrementaContador = () => {
  const count = document.getElementById('count');
  count.textContent = parseInt(count.textContent) + 1;
  qtdeClicks++;
  if(qtdeClicks >= 15) {
    adicionarTitulo();
  }
  if(count === 1) {
    desabilitarHabilitarBotao();
  }
}

const decrementaContador = () => {
  const count = document.getElementById('count');
  if(count.textContent > 0) {
    count.textContent = parseInt(count.textContent) - 1;
    qtdeClicks++;
    if(qtdeClicks >= 15) {
      adicionarTitulo();
    }
  }
  
  if(count === 0)
    desabilitarHabilitarBotao();
}

const adicionarTitulo = () => {
  const topPage = document.getElementById('top-page');
  const h1 = document.createElement('h1');
  h1.textContent = 'Você não cansa não?';
  topPage.appendChild(h1);
}

const desabilitarHabilitarBotao = () => {
  const botaoDiminuir = document.getElementById('btn-minus');
  botaoDiminuir.disabled ? botaoDiminuir.removeAttribute('disabled') : botaoDiminuir.setAttribute('disabled', true);
}

const adicionarEventosIncrementoDecremento = () => {
  const botaoAdicionar = document.getElementById('btn-add');
  const botaoDiminuir = document.getElementById('btn-minus');

  botaoAdicionar.addEventListener('click', incrementaContador);
  botaoDiminuir.addEventListener('click', decrementaContador);
}

const setarPropriedadesBotao = (elemento, id, conteudo) => {
  elemento.setAttribute('id', id);
  elemento.classList.add('col-5', 'd-flex', 'justify-content-center', 'align-items-center');
  elemento.setAttribute('style', 'font-size: 24px;');
  elemento.textContent = conteudo;
}

const criarBotoesIncrementoDecremento = () => {
  const botaoAdicionar = document.createElement('button');
  const botaoDiminuir = document.createElement('button');

  setarPropriedadesBotao(botaoAdicionar, 'btn-add', '+');
  setarPropriedadesBotao(botaoDiminuir, 'btn-minus', '-');

  const btnContainer = document.getElementById('btn-container');
  btnContainer.appendChild(botaoDiminuir);
  btnContainer.appendChild(botaoAdicionar);
}

const imprimirValorDoInput = (event) => {
  const input = document.getElementById('my-input');
  
}

const programa = () => {
  // criarBotoesIncrementoDecremento();
  // adicionarEventosIncrementoDecremento();

  const input = document.createElement('input');
  input.setAttribute('id', 'my-input');
  const divContainer = document.getElementById('container');
  divContainer.appendChild(input);

  const btnAdd = document.getElementById('btn-add');
  btnAdd.addEventListener('click', imprimirValorDoInput);
}



/*
  <button id="btn-minus" class="col-5 d-flex justify-content-center align-items-center" style="font-size: 24px;">
    -
  </button>
  
  <button id="btn-add" class="col-5 d-flex justify-content-center align-items-center" style="font-size: 24px;">
    +
  </button>
*/


// executa o programa
programa();




