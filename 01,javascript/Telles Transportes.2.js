// informacoes
let peso = 0;
let distancia = 0;
let volume = 0;
let frete;

// entrada de dados
peso = Number(prompt("Peso da carga (kg):"));
distancia = Number(prompt("Distância da entrega (km):"));
volume = Number(prompt("Volume da carga (m³):"));

// processamento
frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume);

// saida
console.log("--- Cálculo de Frete ---");
console.log("Preço final do frete: R$ " + frete.toFixed(2));