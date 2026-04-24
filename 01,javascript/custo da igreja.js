// informacoes
let custosMensais = 0;
let recebidoNoDia = 0;
let faltaPagar;

// entrada de dados
custosMensais = Number(prompt("Informe os custos mensais da igreja:"));
recebidoNoDia = Number(prompt("Informe o valor recebido hoje:"));

// processamento
faltaPagar = custosMensais - recebidoNoDia;

// saida
console.log("--- Gestão Paroquial ---");
console.log("Valor que falta pagar: R$ " + faltaPagar.toFixed(2));