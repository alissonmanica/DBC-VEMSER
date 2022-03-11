// 1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
//    e essa função imprima no console o valor de cada elemento da lista;
let lista = [1, 'Olá', undefined, 99999, 'Texto qualquer'];
let imprimeLista = function (parametroLista) {
    for(let i = 0; i <= parametroLista.length; i++){
        console.log(parametroLista[i]);
    }
}

imprimeLista(lista)

// 2) Crie uma função que receba uma string e retorne esta string sem nenhum espaço em branco no início e no fim 
//    e todos caracteres em maiúsculo;
//    // ex: minhaFuncao('      Oi,    essa    é    uma   string    qualquer   ') => deve retornar a string: 'OI, ESSA É UMA   STRING   QUALQUER'
let stringPadrao = ('Oi,    essa    é    uma   string    qualquer')
function formatacaoString(string) {
    let stringSemiFormatada = string.toUpperCase().trim();
    return stringSemiFormatada;
}

console.log(formatacaoString(stringPadrao));

// 2a) Crie uma função que, baseada no retorno da função da questão anterior, remova também os caractéres entre as palavras 
// 	(porém mantenha ao menos um para continuar com as palavras separadas)
// 	// ex: minhaFuncao('Oi,    essa    é    uma   string    qualquer') => deve retornar a string: 'Oi, essa é uma string qualquer'
function limpaEspaco(stringParaFormatar) {

    let limpandoString = formatacaoString(stringParaFormatar).split(' ');
    let stringLimpa = [];
    for (let i = 0; i < limpandoString.length; i++) {
      	if (limpandoString[i] !== '') {
          stringLimpa.push(limpandoString[i])
        }
    }
  	return stringLimpa
}

console.log (limpaEspaco(stringPadrao).join(' '))




// 3) Crie uma função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma callback function que seja 
//    chamada caso algum dos números informados seja inválido.
//    Esta função de Callback exibe somente a msg no console 'Algum número digitado foi inválido';
function erroSoma() {console.log('Algum número digitado foi inválido!')}

function somaNumeros(n1 = 0, n2 = 0, callback) {
   let soma = n1 + n2;
   
   !isNaN(soma) ? console.log(soma) : callback();
}

somaNumeros(5, 5, erroSoma);



// 4) Crie uma função de busca, que recebe 2 parâmetros (um array e um elemento) e retorna uma mensagem dizendo se aquele elemento
//    existe no array e também qual a posição dele (índice)
//    Ex: minhaFuncao( ['a', 'cachorro', 255], 'cachorro' ) => retorna 'O elemento existe no array e a posição dele é: 1'
//    Ex: minhaFuncao( ['a', 'cachorro', 255], 'abacate' ) => retorna 'O elemento não existe no array'
function buscaElementoNoArray(array, elemento) {
    array.includes(elemento) 
    ? console.log(`O elemento existe no array e a posição dele é ${array.indexOf(elemento)}`) 
    : console.log('O elemento não existe no array');
}
 buscaElementoNoArray(['a', 'cachorro', 255], 'cachorro');
