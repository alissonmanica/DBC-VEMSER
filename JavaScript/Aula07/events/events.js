// incrementar contador
let incrementaContador = event => {
    // buscar elemento span e verificar o número que tem lá para realizar a alteração
    qtdeClicks++;

    console.log(event.target.id); // elemento event sempre é passado como parâmetro
    // event.target tem a referência para o elemento que "sofreu" o evento

    let contador = document.getElementById('count');

    let novoValor = parseInt(contador.innerText) + 1;
    contador.innerText = novoValor;

    if(novoValor < 10 && novoValor >= 0) {
        contador.setAttribute('class', 'text-secondary');
    } 
    if(novoValor >= 10) {
        contador.setAttribute('class', 'text-primary');
    }

    if(qtdeClicks === 25) {
        let h1 = document.createElement('h1');
        h1.innerText = 'Não cansou ainda não?';

        h1.setAttribute('class', 'my-h1'); // criar atributo

        let topOfPage = document.getElementById('top-page');
        topOfPage.setAttribute('class', `${topOfPage.className} bg-primary`); // concatenar as classes existentes à uma nova

        topOfPage.appendChild(h1);
    }
}

// decrementar contador
let decrementaContador = () => {
    // buscar elemento span e verificar o número que tem lá para realizar a alteração
    qtdeClicks++;

    let contador = document.getElementById('count');

    let novoValor = parseInt(contador.innerText) - 1;
    contador.innerText = novoValor;

    if(novoValor < 10 && novoValor >= 0) {
        contador.setAttribute('class', 'text-secondary');
    } 
    if(novoValor < 0) {
        contador.setAttribute('class', 'text-danger');
    }

    if(qtdeClicks === 25) {
        let h1 = document.createElement('h1');
        h1.innerText = 'Não cansou ainda não?';

        let topOfPage = document.getElementById('top-page');
        topOfPage.appendChild(h1);
    }
}


// funcao para iniciar o programa
let iniciaPrograma = () => {
    // buscar os elementos button e adicionar os respectivos "eventListeners"

    // document.getElementById()
    let btnAdiciona = document.getElementById('btn-add');
    btnAdiciona.addEventListener('click', incrementaContador);

    let btnReduz = document.getElementById('btn-minus');
    btnReduz.addEventListener('click', decrementaContador);
}


let qtdeClicks = 0;



// iniciando o programa
iniciaPrograma();




