// informacoes
let faturamentoBruto = 0;
let premiacoes = 0;
let presentes = 0;
let comissoes = 0;
let lucroDonaBete;

// entrada de dados
faturamentoBruto = Number(prompt("Bruto total faturado hoje:"));
premiacoes = Number(prompt("Total pago em premiações:"));
presentes = Number(prompt("Total gasto em presentes/agrados:"));
comissoes = Number(prompt("Total de comissões dos operadores:"));

// processamento
lucroDonaBete = faturamentoBruto - premiacoes - presentes - comissoes;

// saida
console.log("--- Relatório de Lucro: Dona Bete ---");
console.log("Lucro líquido do dia: R$ " + lucroDonaBete.toFixed(2));