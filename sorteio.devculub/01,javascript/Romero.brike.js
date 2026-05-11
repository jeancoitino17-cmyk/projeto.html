// informacoes
let precoCusto = 0;
let precoVenda;

// entrada de dados
precoCusto = Number(prompt("Valor pago na obra de arte:"));

// processamento
// 200% de lucro significa que ele vende pelo triplo do preço (Custo + 2x Custo)
precoVenda = precoCusto * 3;

// saida
console.log("--- Precificação Romero Brique ---");
console.log("A obra deve ser vendida por: R$ " + precoVenda.toFixed(2));