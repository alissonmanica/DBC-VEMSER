// 1) Crie uma função que inverta um número; (NÃO pode usar a função revert())
//    Exemplo: minhaFuncao(370914) // retorno esperado: 419073 (É o número 419073 e não a string '419073', o mesmo vale para o parâmetro passado);
let elementoNumero = (370914)
let revertArray = [];

const revertNumero = (numero) => { 
  let numeroString = numero.toString();
  let invertNum = numeroString.split('')
  for (let i = invertNum.length; i >= 0 ; i--) {  
    revertArray.push(invertNum[i])   
  }   
  let stringFormatada = revertArray.join('')
  let stringFormatadaParaNumero = parseInt(stringFormatada)
  return stringFormatadaParaNumero
} 
revertNumero(elementoNumero)





// 2) Crie uma função que recebe um array de números e encontre o segundo menor e o segundo maior número do array
//    e imprima eles no console (imprime somente 1 número se ele for o segundo menor e o segundo maior também);
//    Exemplo: minhaFuncao( [1, 3, 5, 7, 9] ) // neste caso, imprime: 3 e imprime: 7
//    Exemplo: minhaFuncao( [1, 3, 5] ) // neste caso, imprime somente o: 3
let numeros = [1, 3, 5, 7, 9];
   
   function segundoMenorEMaiorNumero() {
       for(let j = 0 ; j < numeros.length; j++){
           for(let i = 0;i < numeros.length; i++){
                   if(numeros[i] < numeros[i+1]){
                       let temporario = numeros[i];
                       numeros[i] = numeros[i+1];
                       numeros[i+1] = temporario;
                   }
               }
       }
       let maior = numeros[1];
       let menor = numeros[numeros.length - 2]
       if(maior === menor) {
           return `${maior}`
       } else {
           return `${menor} ${maior}`
       }
   }
   console.log(segundoMenorEMaiorNumero(numeros));





// 3) Crie uma função que recebe uma string e coloca todas as primeiras letras em maiúsculo;
//    Exemplo: minhaFuncao( 'hoje faremos o trabalho em dupla, que legal - sqn' )
//    // neste caso retorna: 'Hoje Faremos O Trabalho Em Dupla, Que Legal - Sqn';
const primeiraLetraMaiuscula = (string) => {	
    let separaString = string.split(' ')
    let arrayCompleta = [];
    let arrayConvertida;
    for (let i = 0; i < separaString.length; i++) {
        let primeiraLetra = separaString[i].charAt(0).toUpperCase()
        let arrayCortado = separaString[i].slice(1)
        let arrayFormatada = primeiraLetra.concat(arrayCortado)
            arrayCompleta.push(arrayFormatada)
    }
         return arrayConvertida = arrayCompleta.join(' ')
  }
  
  primeiraLetraMaiuscula('hoje Faremos o trabalho em dupla, que legal - sqn')



  

// 4) Crie uma função que receba uma string e imprime uma mensagem com a quantidade de vogais e a quantidade de consoantes na string 
//   da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';
//   // ex: contarVogaisConsoantes('Oi, tenho 5 anos de idade!!! ;D')  
//   =>  imprime:  A string "Oi, tenho 5 anos de idade!!! ;D" tem 10 vogais e 9 consoantes
let vogais = ['a', 'e', 'i', 'o', 'u'];
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

const verificaVogaisOuConsoantes = (texto) => {
  let textoMinusculo = texto.toLowerCase()
  let textoSeparado = textoMinusculo.split('')
  let iVogal = 0;
  let iConsoante = 0;
  for (let i = 0; i < textoSeparado.length; i++) {
    for (let y = 0; y < consoantes.length; y++) {
      if (textoSeparado[i] === vogais[y]) {
      iVogal++
      } else if (textoSeparado[i] === consoantes[y]) {
        iConsoante++
      }
    
    }
  }
  console.log(`A string "${texto}" tem ${iVogal} vogais e ${iConsoante} consoantes`)
}
  
verificaVogaisOuConsoantes('Oi, tenho 5 anos de idade!!! ;D')





// 5) Crie uma função que imprima no console todas as possíveis combinações de uma string;
//   // ex: imprimirCombinacoes('tri')
//   => possiveis combinações da string "tri":  
//   't', 'tr', 'ti', 'tri', 'tir', 'r', 'rt', 'ri', 'rit', 'rti', 'i', 'ir', 'it', 'irt', 'itr'
function printCombinations(str) {
    let arr = str.split('');
    let arrCombinations = [];
    let aux = '';

    for(let i = 0; i < arr.length; i++) {
      aux += arr[i];
      arrCombinations.push(aux)
      
      for(let j = 0; j < arr.length; j++) {
        if(i != j) {
          aux += arr[j]
          arrCombinations.push(aux)
        }
        
      }
      aux = arr[i]
      for(let k = (arr.length - 1); k >= 0; k--) {
        if(i != k) {
          aux += arr[k]
          arrCombinations.push(aux)
        }
        
      }

      aux = '';
    }

    return arrCombinations;

  }

  console.log(printCombinations("bah"));