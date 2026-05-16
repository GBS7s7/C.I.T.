const fs = require('fs');
const path = require('path'); // Módulo nativo do Node para lidar com caminhos

// Isso cria o caminho completo: "C:\Users\...\projeto_jax\estoque.json"
const caminhoArquivo = path.join(__dirname, 'estoque.json');

function carregarDados() {
    try {
        const dadosJSON = fs.readFileSync(caminhoArquivo, 'utf-8');
        return JSON.parse(dadosJSON);
    } catch (erro) {
        return []; // Retorna uma lista vazia se der erro
    }
}

const estoque = carregarDados(); // A constante estoque agora está disponível no arquivo todo
///////////////////////////////////////////////////////////////////////////////









// 1. Dados da Hilux

const Hilux = estoque.find(item => item.modelo == "Hilux");
console.log(Hilux)
console.log(`Modelo: ${Hilux.modelo} |
Marca: ${Hilux.marca} |
Preco: ${Hilux.preco} |
Categoria: ${Hilux.categoria} |`);




