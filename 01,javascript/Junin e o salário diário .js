// informacoes
let salarioMensal = 0;
let diasTrabalhados = 0;
let valorPorDia;
let salarioSemanal;

// entrada de dados
salarioMensal = Number(prompt("Salário mensal do Junin:"));
diasTrabalhados = Number(prompt("Quantos dias ele trabalhou?"));

// processamento
valorPorDia = salarioMensal / diasTrabalhados;
salarioSemanal = valorPorDia * 5;

// saida
console.log("--- Relatório do Junin ---");
console.log("Valor por dia trabalhado: R$ " + valorPorDia.toFixed(2));
console.log("Salário semanal (escala 5x2): R$ " + salarioSemanal.toFixed(2));