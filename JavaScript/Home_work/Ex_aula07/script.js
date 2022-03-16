const listaPai = document.getElementById('lista')

const campoInput = document.getElementById('campoinput')
// let texto = document.createTextNode(campoInput.value)
console.log(campoInput.value)


const excluirElemento = (li) => {
    let botaoExcluir = document.createElement('button')
    let iconeExcluir = document.createElement('i')
    botaoExcluir.appendChild(iconeExcluir)
    iconeExcluir.setAttribute('class', "fa-solid fa-trash")
    li.appendChild(botaoExcluir)
    botaoExcluir.addEventListener('click', () => {
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
    listaPai.appendChild(elementoDaLista)
    elementoDaLista.classList.add('elementodalista')
    elementoDaLista.setAttribute('id', 'elementodalista')
    let confirma = confirmarElemento(elementoDaLista)
    p.appendChild(texto)
    elementoDaLista.appendChild(p)
    let excluir = excluirElemento(elementoDaLista)
    // elementoDaLista.appendChild(botaoExcluir)
    // elementoDaLista.innerHTML = `
    // <button id="btn-confirm"><i class="fa-solid fa-check"></i></button>
    // <p>${conteudo}</p>
    // <button id="btn-cancela"><i class="fa-solid fa-trash"></i></button>
    // `
    // listaPai.appendChild(elementoDaLista)
}

const formulario = document.getElementById('formulario')
const clicaBotao = formulario.addEventListener('submit', evento => {
    evento.preventDefault()
    criarElementosParaLista()
}) 



