// informacoes
let quantidadeShows = 0;
let precoBomba = 0;
let bombasNecessarias;
let custoTotal;

// entrada de dados
quantidadeShows = Number(prompt("Quantos shows estão marcados?"));
precoBomba = Number(prompt("Preço unitário da bomba de fumaça:"));

// processamento
bombasNecessarias = quantidadeShows * 7;
custoTotal = bombasNecessarias * precoBomba;

// saida
console.log("--- Planejamento Sarumano ---");
console.log("Total de bombas necessárias: " + bombasNecessarias);
console.log("Dinheiro a mobilizar: R$ " + custoTotal.toFixed(2));