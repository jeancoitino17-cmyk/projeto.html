// informacoes
let relPF, relPJ, tempoPF, tempoPJ, valorPF, valorPJ;
let totalRel, tempoTotal, valorTotal;
let mediaValorPF, mediaValorPJ, mediaTempoPF, mediaTempoPJ;

// entrada de dados
relPF = Number(prompt("Quantidade de relatórios PF:"));
relPJ = Number(prompt("Quantidade de relatórios PJ:"));
tempoPF = Number(prompt("Tempo total gasto PF (horas):"));
tempoPJ = Number(prompt("Tempo total gasto PJ (horas):"));
valorPF = Number(prompt("Valor total recebido PF:"));
valorPJ = Number(prompt("Valor total recebido PJ:"));

// processamento
totalRel = relPF + relPJ;
tempoTotal = tempoPF + tempoPJ;
valorTotal = valorPF + valorPJ;
mediaValorPF = valorPF / relPF;
mediaValorPJ = valorPJ / relPJ;
mediaTempoPF = tempoPF / relPF;
mediaTempoPJ = tempoPJ / relPJ;

// saida
console.log("============= RELATÓRIO DO KOWALSKI =============");
console.log("DADOS GERAIS:");
console.log("Total de relatórios: " + totalRel);
console.log("Tempo total trabalhado: " + tempoTotal + " horas");
console.log("Valor total recebido: R$ " + valorTotal.toFixed(2));
console.log("-------------------------------------------------");
console.log("MÉDIAS POR CATEGORIA:");
console.log("Média Valor PF: R$ " + mediaValorPF.toFixed(2));
console.log("Média Valor PJ: R$ " + mediaValorPJ.toFixed(2));
console.log("Média Tempo PF: " + mediaTempoPF.toFixed(2) + " h");
console.log("Média Tempo PJ: " + mediaTempoPJ.toFixed(2) + " h");
console.log("=================================================");