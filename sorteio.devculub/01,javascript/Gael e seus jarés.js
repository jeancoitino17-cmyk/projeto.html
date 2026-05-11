// informacoes
let numCaminhoes = 0;
let jaresPorCaminhao = 50;
let precoVendaJare = 90;
let custoFreteCaminhao = 450;
let totalJares, faturamento, custoTotal, lucroTemporada;

// entrada de dados
numCaminhoes = Number(prompt("Número de caminhões para a temporada:"));

// processamento
totalJares = numCaminhoes * jaresPorCaminhao;
faturamento = totalJares * precoVendaJare;
custoTotal = numCaminhoes * custoFreteCaminhao;
lucroTemporada = faturamento - custoTotal;

// saida
console.log("--- Temporada de Vendas Gael ---");
console.log("Jarés vendidos: " + totalJares);
console.log("Faturamento bruto: R$ " + faturamento.toFixed(2));
console.log("Custo de frete: R$ " + custoTotal.toFixed(2));
console.log("Lucro líquido: R$ " + lucroTemporada.toFixed(2));