/*
  +============================================================+
  |                    CADASTRO DE PRODUTOS                    |
  +============================================================+
*/

let listaDeProdutos = [];




// Função para converter as virgulas em pontos
const converteNumero = (numero) => {
  let numeroAlterado = numero;

  if(numero.includes(',')) {
    numeroAlterado = numero.replace(',', '.');
  }

  return parseFloat(numeroAlterado).toFixed(2);
}




// Função para cadastrar produtos na lista
const cadastroDoProduto = (id, descricao, preco) => {
  id = idProduto;
  let descricaoProduto;
  let precoProduto;

  do {
    descricaoProduto = prompt('Digite a descrição do produto:');
    if (listaDeProdutos.some(e => e.descricao === descricaoProduto)) {
      alert('Erro! Produto ja consta na lista de produtos!');
      descricaoProduto = null
    } else if (descricaoProduto === '') {
      alert('Erro! Digite uma descrição válida para o produto!');
      descricaoProduto = null
    } else {
      descricao = descricaoProduto
    }
  } while (descricaoProduto === null)

  do {
  precoProduto = prompt('Digite o preço do produto:');
  precoProduto = converteNumero(precoProduto);
  isNaN(precoProduto) 
    ? alert('Erro! Digite um valor válido para o preço do produto!') 
    : preco = precoProduto;
  } while(isNaN(precoProduto))

  let confirmacaoCadastro = confirm(`Confirme o cadastro: \n Id: ${idProduto} \n Descrição: ${descricaoProduto} \n Preço: R$${precoProduto}`)

  if (confirmacaoCadastro) {
    idProduto++
    listaDeProdutos.push({id, descricao, preco});
    alert('Produto cadastrado com sucesso!');
  } else {
    alert('Cadastro cancelado!');
  }
}




//Função para remover o produto
const removeProduto = () => {
  let removerProduto;
  let continuarRemovendo;
  do {
    removerProduto = (prompt('Digite o Id do produto que desejas remover:'));
    removerProduto === null ? removerProduto = null : removerProduto = parseInt(removerProduto);
    if (!isNaN(removerProduto) && removerProduto !== null) {
      let produtoRemovido = listaDeProdutos.find( e => e.id === removerProduto);
      if (produtoRemovido) {
        let respostaRemocao = confirm(`Você tem certeza que deseja remover o seguinte item? \n Id: ${produtoRemovido.id} \n Descrição: ${produtoRemovido.descricao} \n Preço R$${produtoRemovido.preco}`)
        if(respostaRemocao) {
          listaDeProdutos = listaDeProdutos.filter( e => e.id !== removerProduto)
          alert('Produto removido!')
        }
      } else {
        alert('Produto não encontrado!')
      }
      continuarRemovendo = confirm('Deseja remover novamente?')
    } else if (isNaN(removerProduto) && removerProduto !== null) {
      alert('Erro! Digite apenas números!');
      }
  } while (removerProduto !== null && continuarRemovendo === true)
} 




//Função para encontrar produto
const encontreProduto = () => {
  let procurarProduto;
  let continuarProcurando;
  do {
    procurarProduto = (prompt('Digite o Id do produto que desejas encontrar:'));
    procurarProduto === null ? procurarProduto = null : procurarProduto = parseInt(procurarProduto);
    if (!isNaN(procurarProduto) && procurarProduto !== null) {
      let produtoEncontrado = listaDeProdutos.find(e => e.id === procurarProduto)
        if (produtoEncontrado) {
          alert('Produto encontrado!')
          console.table(produtoEncontrado)
        } else {
          alert('Produto não encontrado!')
        }
      continuarProcurando = confirm('Deseja procurar novamente?')
    } else if (isNaN(procurarProduto) && procurarProduto !== null) {
      alert('Erro! Digite apenas números!');
      }
  } while(procurarProduto !== null && continuarProcurando === true)
}



//Função para filtrar a descrição dos produtos
const filtraDescricao = () => {
  let filtraDesc= listaDeProdutos.map( e => e.descricao);
  console.table(filtraDesc);
}


//Função para selecionar descrição
const selecionaDescricao = () => {
  let descricaoDesejada = prompt('Digite a descrição do produto desejado:');
  let procuraDescricao = listaDeProdutos.find( e => e.descricao === descricaoDesejada);
  if (procuraDescricao) {
    console.table(procuraDescricao);
  } else {
    !alert('Produto não encontrado!')
  }
}





//Função para somar o patrimônio
const patrimonioTotal = () => {

somaTotal = listaDeProdutos.reduce((valor, produto) => valor + parseFloat(produto.preco), 0);

alert(`O patrimônio total da loja é de R$${somaTotal.toFixed(2)}.`);
console.log(`O patrimônio total da loja é de R$${somaTotal.toFixed(2)}`)
}



let respostaUsuario;
let idProduto = 1;

do {
respostaUsuario = (prompt('===== CADASTRO DE PRODUTOS ===== \n Você deseja: \n 1- Cadastrar um produto \n 2- Excluir um produto \n 3- Encontrar um produto \n 4- Imprimir a lista de produtos cadastrados \n 5- Verificar o total de patrimônio da loja \n 6- Verificar se todos os produtos cadastrados possuem um preço válido \n 7- Sair do programa'))

let confirmacaoContinuar;

 switch(respostaUsuario) {
    case '1':
      do {
        cadastroDoProduto();
        confirmacaoContinuar = confirm('Deseja cadastrar novamente?');
      } while (confirmacaoContinuar);
      break;

    case '2':
      removeProduto()
      break;

    case '3':
      encontreProduto()
      break;

    case '4':
        let imprimeLista = prompt('Digite: \n 1) Para imprimir a lista completa dos produtos \n 2) Para imprimir a lista de descrições dos produtos \n 3) Para escolher uma descrição')
        switch(imprimeLista) {
          case '1':
            console.table(listaDeProdutos);
            break;
            
          case '2':
            filtraDescricao()  
            break;
            
          case '3':
            selecionaDescricao()  
            break;

          case null:
            alert('Voltando para o menu inicial...')
            break;

          default:
            alert('Erro! Digite uma das opções disponíveis!')
        }
      break;

    case '5':
        patrimonioTotal()
      break;

    case '6':
      if (listaDeProdutos.every(e => e.preco > 0)) {
        alert('Todos os produtos possuem um preço válido!');
      } else {
        alert('Erro! algum produto não possui o preço válido!');
        let precoInvalido = listaDeProdutos.filter(e => e.preco == 0)
        console.table(precoInvalido);
      }
      break;

    case '7':
      alert('Operação realizada com sucesso! Saindo do programa...');
      break;

    case null:
       break;

    default:
      alert('Erro! Digite um número válido entre as opções!');
      break;

 }
} while (respostaUsuario !== '7' && respostaUsuario !== null);

