// informacoes
let pesoGramas = 0;
let precoPorQuilo = 10.00;
let precoFinal;

// entrada de dados
pesoGramas = Number(prompt("Peso da ração em gramas:"));

// processamento
// Converte gramas para quilos dividindo por 1000
precoFinal = (pesoGramas / 1000) * precoPorQuilo;

// saida
console.log("--- Pet Shop Ron Bernardo ---");
console.log("Preço total da ração: R$ " + precoFinal.toFixed(2));