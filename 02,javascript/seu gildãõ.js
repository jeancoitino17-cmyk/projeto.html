// info
let adultos, criancas, valorTotalGasto;
let totalCarne, totalCerveja, totalAgua, totalRefri, totalCarvao, totalSal;

//  Entrada 
adultos = Number(prompt("Digite a quantidade de adultos:"));
criancas = Number(prompt("Digite a quantidade de crianças:"));
valorTotalGasto = Number(prompt("Digite o valor total gasto (apenas números):"));

//  Processamento 
totalCarne = (adultos * 400) + (criancas * 200);
totalCerveja = adultos * 1200;
totalAgua = (adultos * 1000) + (criancas * 500);
totalRefri = (adultos * 1000) + (criancas * 500);
totalCarvao = totalCarne; 
totalSal = (totalCarne / 1000) * 20;


let totalPessoas = adultos + criancas;
let valorPorPessoa = valorTotalGasto / totalPessoas;

//  Saída
const mensagemFinal = `
🥩 Carne: ${totalCarne}g
🍺 Cerveja: ${totalCerveja}ml
💧 Água: ${totalAgua}ml
🥤 Refri: ${totalRefri}ml
🔥 Carvão: ${totalCarvao}g
🧂 Sal: ${totalSal.toFixed(1)}g

💰 VALOR DO RACHA:
Total Gasto: R$ ${valorTotalGasto.toFixed(2)}
Cada um paga: R$ ${valorPorPessoa.toFixed(2)} (${totalPessoas} pessoas)
`;

alert(mensagemFinal);
console.log(mensagemFinal);