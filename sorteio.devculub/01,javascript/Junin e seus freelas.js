// informacoes
let horasEstimadas = 0;
let custoConsultoria = 500;
let valorHoraJunin = 350;
let precoCliente;
let lucroJunin;

// entrada de dados
horasEstimadas = Number(prompt("Horas estimadas pelo Denis Nery:"));

// processamento
precoCliente = custoConsultoria + (valorHoraJunin * horasEstimadas);
lucroJunin = precoCliente - custoConsultoria;

// saida
console.log("--- Orçamento Freela ---");
console.log("Preço para o cliente: R$ " + precoCliente.toFixed(2));
console.log("Lucro real do Junin: R$ " + lucroJunin.toFixed(2));