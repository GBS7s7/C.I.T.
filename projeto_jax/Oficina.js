// Lista de servicos e clientes;
const fs = require(`fs`)

// Le os dados do arquivo JSON
const dadosDoJSON = fs.readFileSync('tabela3.json', 'utf-8');
// Transforma os dados em objeto JS
const tabela = JSON.parse(dadosDoJSON);

//===================================================//





// 1. encontrar o servico pendente (concluido == false);
const servicoPendente = tabela.find(item => item.concluido == false); // se fosse mais de 1 -> .filter
console.log(`ATENCAO: o servico "${servicoPendente.desc}" de ${servicoPendente.cliente} esta pendente!`);



// 2. aumento de 5% nos servicos (map)
const inflacao = tabela.map((item) => {
    return {
        // aqui eu crio novos "topicos" pros objetos desse novo array de objetos
        id: item.id,
        nome: item.cliente,
        valor: item.valor * 1.05,
        concluido: item.concluido
    }   
});
    // Salvando no json:
// const dadosInflacao = JSON.stringify(inflacao, null, 2);
// fs.writeFileSync('faturamento.json', dadosInflacao);




// 3. forEach pra imprimir os novos valores
console.log("\n --NOVOS VALORES--");
    // imprimir os dados do novo array (depois do map)
inflacao.forEach((item) => {
    console.log(`ID: ${item.id} | cliente: ${item.nome} | Novo valor: ${item.valor}`);
});




//================================================//

// 4. .filter apenasPagos
const apenasPagos = tabela.filter(item => item.concluido == true); 

const recibo = apenasPagos.map((item) => {
    return{
        cliente: item.cliente,
        desc: item.desc,
        valor: item.valor * 1.05        
    }
});

const relatorio_pagamentosJSON = JSON.stringify(recibo, null, 2);
fs.writeFileSync('apenaspagos.json', relatorio_pagamentosJSON);
