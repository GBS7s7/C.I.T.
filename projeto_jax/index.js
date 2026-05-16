// Importamos o módulo de arquivos do Node
const fs = require('fs');

// 1. Lendo o arquivo 'dados.json' (isso vem como uma string/texto)
const dadosBrutos = fs.readFileSync('dados.json', 'utf-8');

// 2. Transformando o texto em Objeto JS (o famoso Parse)
const inventario = JSON.parse(dadosBrutos);

console.log("--- DADOS LIDOS DO 'BANCO' ---");
console.log(inventario);



// 3. Vamos fazer uma alteração (simulando uma venda ou update)
inventario[0].peca = "Pneu de Corrida";


// 4. Inserir um novo produto no inventario

function adicionarProduto(inventario, produto) {
    for (let i = 0; i <= inventario.length - 1; i++) {
        
        if (inventario[i].id == produto.id) {
            return console.log("O ID: " + produto.id + " ja existe seu merda! \n");
        }
    }
    inventario.push(produto);
    return inventario;
}

let vela = { id: 4, peca: "Vela de Ignição", preco: 15.00, emEstoque: true };
let banco = {id: 5, peca: "Banco de Tras", preco: 250.00, emEstoque: false};
adicionarProduto(inventario, banco);


// 5. Salvando de volta no arquivo:
    // Primeiro vira texto de novo, depois grava
const dadosAtualizados = JSON.stringify(inventario, null, 2); // Esse 'null, 2' é pra deixar o JSON bonito
fs.writeFileSync('dados.json', dadosAtualizados);


// Painel de execucao
console.log("✅ Arquivo atualizado com sucesso! \n  - Inventario atualizado:");
console.log(inventario);