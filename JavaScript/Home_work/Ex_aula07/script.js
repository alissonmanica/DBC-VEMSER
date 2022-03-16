const listaPai = document.getElementById('lista')

const campoInput = document.getElementById('campoinput')


let listaCount = 0;

const tituloDaLista = () => {
    const tituloLista = document.getElementById('titulo-lista');
    if (listaCount === 0) {
        tituloLista.textContent = 'Nenhum "To Do" cadastrado ainda.';
    } else {
        tituloLista.textContent = 'To Do';
    }
}





const excluirElemento = (li) => {
    let botaoExcluir = document.createElement('button')
    let iconeExcluir = document.createElement('i')
    botaoExcluir.appendChild(iconeExcluir)
    iconeExcluir.setAttribute('class', "fa-solid fa-trash")
    li.appendChild(botaoExcluir)
    botaoExcluir.addEventListener('click', () => {
        --listaCount
        tituloDaLista()
        li.remove()
    })
}


const confirmarElemento = (li) => {
    let botaoConfirma = document.createElement('button')
    let iconeConfirma = document.createElement('i')
    botaoConfirma.appendChild(iconeConfirma)
    iconeConfirma.setAttribute('class', "fa-solid fa-check")
    li.appendChild(botaoConfirma)
    botaoConfirma.addEventListener('click', () => {
        iconeConfirma.setAttribute('class', "fa-solid fa-xmark")
        li.classList.toggle('mudacor')
    })
    
}





const criarElementosParaLista = () => {
    let texto = document.createTextNode(campoInput.value)
    let p = document.createElement('p')
    const elementoDaLista = document.createElement('li')
    if (texto.textContent === "") {
        alert('Erro! Digite algo na caixa de texto!')
    } else {
        ++listaCount
        tituloDaLista()
        listaPai.appendChild(elementoDaLista)
        elementoDaLista.classList.add('elementodalista')
        elementoDaLista.setAttribute('id', 'elementodalista')
        let confirma = confirmarElemento(elementoDaLista)
        p.appendChild(texto);
        elementoDaLista.appendChild(p)
        let excluir = excluirElemento(elementoDaLista)
    }
}



const formulario = document.getElementById('formulario')
const clicaBotao = formulario.addEventListener('submit', evento => {
    evento.preventDefault()
    criarElementosParaLista()
    console.log(listaCount)
}) 


