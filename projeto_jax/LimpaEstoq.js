const fs = require('fs');

const dadosProdutos = fs.readFileSync('Pecas.json', 'utf-8');
const produtos = JSON.parse(dadosProdutos);
//==============================================================//


// 1. .find (high order functions com arrow functions)
const intruso = produtos.find(produto => produto.id == 35);
// HOF que varre o array e verifica um item que satisfaca a condicao
    // `produto` -> parametro temporario (basicamente um apelido pra usar enquanto procura)



// 2. .map pra imprimir o nome e o preco (inflacionado em 15%)
const vitrine = produtos.map((item) =>{
    return {
        nome: item.nome,
        precoPromocao: item.preco * 0.8 //80% de desconto
    }
});

console.log("\n --- PROMOCAO RELAMPAGO ---");

    // .forEach pra imprimir a promocao
vitrine.forEach((item) => {
    console.log(`${item.nome} por apenas ${item.precoPromocao.toFixed(2)}`);
})



// 4. forEach pra percorrer o array e printar so o ID e o Estoque (nao precisa ser "chamado").
produtos.forEach((item) => {console.log(`ID: ${item.id} | Estoque: ${item.estoque}`)});


//======================================================================================//

// Exercicio 2;


// 1. achar o id 42 (cabo HDMI)

const a = produtos.find(item => item.id == '42');
console.log("\n" + a.nome);

// 2. .map pra dizer que tem estoque e aumentar preco

//como eu atualizo a lista original?
const novoEstoque2 = produtos.map(item => {
    if (item.id == 42) {
        return {
            ...item,
            estoque: 40
        }
    } else {
        return item;
    }
}); // atualiza o estoque do id 2

console.log(novoEstoque2);