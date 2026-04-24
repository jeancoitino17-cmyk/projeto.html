// informacoes
let gastosSuprimentos = 0;
let fatIngressos = 0;
let fatItens = 0;
let lucroReais;
let lucroPercentual;

// entrada de dados
gastosSuprimentos = Number(prompt("Gasto com suprimentos/mercadorias:"));
fatIngressos = Number(prompt("Faturamento com ingressos:"));
fatItens = Number(prompt("Faturamento com itens:"));

// processamento
lucroReais = (fatIngressos + fatItens) - gastosSuprimentos;
lucroPercentual = (lucroReais / gastosSuprimentos) * 100;

// saida
console.log("--- Balanço do Capitão Ganso ---");
console.log("Lucro obtido: R$ " + lucroReais.toFixed(2));
console.log("Lucro percentual: " + lucroPercentual.toFixed(2) + "%");