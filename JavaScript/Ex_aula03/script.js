// 1) Crie uma função que recebe como parâmetros um caracter e um array de 
// 	caracteres e que remova todas as ocorrências daquele caracter no array; 
//    ex. funcaoRemoveCaracterDoArray('a', [ 'c', 'a', 'texto', 'a' ] )
//    => deve retornar o array: [ 'c', 'texto' ] (pois removeu todos 'a');
function removeCaracterDoArray(caracter, array) {
    let caracterRemovido = [];
        for( let i = 0; i < array.length; i++) {
            array[i] !== caracter 
            ? caracterRemovido.push(array[i])
            : null;
        } 
    return array.includes(caracter)
    ? caracterRemovido 
    : console.log('Caracter inválido!');
  }
  
  console.log(removeCaracterDoArray('y', [ 'c', 'a', 'texto', 'a' ]));





// 2) Crie uma função que receba como parâmetro um array de números e retorne
//  	um array ordenado (NÃO pode usar a função array.sort());
//    ex. funcaoOrdenaArray( [4, 5, 7, 3, 0, 5, 2, 2] ) ===> retorna o array [ 0, 2, 2, 3, 4, 5, 5, 7 ] 
function organizaNumeros(numeros) {
    let numerosOrdenados;
    for (let i = 0; i < numeros.length; i++) {
        for (let y = i; y < numeros.length; y++) {
            if (numeros[i] > numeros[y]) {
                numerosOrdenados = numeros[i]
                numeros[i] = numeros[y]
                numeros[y] = numerosOrdenados;
            }	
        }
    }
    return numeros
  }
  
  console.log(organizaNumeros([4, 5, 7, 3, 0, 5, 2, 2]))





// 3) Crie uma função que recebe como parâmetro 2 arrays (quaisquer que sejam)
// 	e retorne uma concatenação destes 2 arrays;
    function concatenaArray(array1, array2) {
        return arrayConcatenado = array1.concat(array2);
    }

    console.log(concatenaArray([1, 2, 3, 4], ['a', 'b', 'c']));





// 4a) Tendo uma lista vazia [], crie uma função que recebe um elemento 
// 	 qualquer como parâmetro e que adiciona esse elemento à lista;
let list = [];

function adicionaParametroALista(elemento) {
        if (elemento === null || elemento === undefined) {
            console.log ('Parâmetro inválido!');
        } else {
            return list.push(elemento);
        }
    }

adicionaParametroALista('ola')
console.log(list)





// 4b) Crie duas funções, uma para remover o último elemento da lista e outra para remover o primeiro elemento da lista;
function removeUltimoElemento (lista) {
    lista.pop();
    return console.log(lista)
 }

removeUltimoElemento()

function removePrimeiroElemento (lista) {
    lista.shift();
    return console.log(lista)
 }

removePrimeiroElemento()





// 4c) Crie uma função para remover um elemento específico da lista;
// 	 ex: Imagine que temos a lista [ 'a', 4, 'Tiago', 187 ]
// 	 e chamamos a função  removeElemento('Tiago')
// 	 deve remover o elemento 'Tiago' da lista, fazendo com que fique [ 'a', 4, 187 ]
// 	 Obs: caso o elemento passado não exista na lista mostrar uma mensagem para o usuário informando.
let lista = ['a', 4, 'Tiago', 187]

function removeElementoDaLista(elemento) {
    let elementoRemovido = [];
        for( let i = 0; i < lista.length; i++) {
            lista[i] !== elemento 
            ? elementoRemovido.push(lista[i])
            : null;
        } 
    return lista.includes(elemento)
    ? elementoRemovido 
    : console.log('Elemento inválido!');
  }

console.log(removeElementoDaLista(4))





// 5) Crie uma função que gera um número aleátorio entre 0 e 100;
function geradorNumeroAleatorio () {
    return Math.round(Math.random() * 100)
}

geradorNumeroAleatorio()





// 5b) Crie uma lista vazia [] e vá adicionando números aleatórios nesta lista até que a lista tenha 10 números inseridos nela;
//     OBS: só podem ser adicionados a esta lista os seguintes números:
//     - números ímpares que estão entre 14 e 50;
//     - números múltiplos de 12;
let listaNumeral = [];
function adicionaNumerosAleatorios() {
  let variavelGerador;
	do {
    variavelGerador = geradorNumeroAleatorio()
    if (variavelGerador >= 14 && variavelGerador <= 50 && !(variavelGerador % 2 === 0) ||(variavelGerador % 12 === 0)) {
      listaNumeral.push(variavelGerador)
    }
  } while (listaNumeral.length < 10)   
    
}

adicionaNumerosAleatorios()
console.log(listaNumeral)

