// informacoes
let caracteres = 0;
let precoToken = 0;
let tokensUsados;
let custoTotal;

// entrada de dados
caracteres = Number(prompt("Quantidade de caracteres do prompt:"));
precoToken = Number(prompt("Preço de 1 token (R$):"));

// processamento
tokensUsados = 5 + caracteres;
custoTotal = tokensUsados * precoToken;

// saida
console.log("--- Faturamento Startup I.A. ---");
console.log("Tokens gastos: " + tokensUsados);
console.log("Custo total em reais: R$ " + custoTotal.toFixed(2));