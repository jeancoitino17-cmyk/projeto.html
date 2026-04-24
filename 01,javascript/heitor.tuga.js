// informacoes
let estoqueInicial = 0;
let estoqueFinal = 0;
let totalVendas;

// entrada de dados
estoqueInicial = Number(prompt("Quantidade inicial de laranjas:"));
estoqueFinal = Number(prompt("Quantidade final (o que sobrou):"));

// proseçamento
totalVendas = estoqueInicial - estoqueFinal;

// saida
console.log("--- Relatório Trajeto Pomar ---");
console.log("Laranjas vendidas no dia: " + totalVendas);