// informacoes
let salario = 0;
let moradia, agua, luz, internet, gasolina, streamings, telefone, outros;
let sobraTotal;

// entrada de dados
salario = Number(prompt("Valor do salário:"));
moradia = Number(prompt("Custo Moradia:"));
agua = Number(prompt("Custo Água:"));
luz = Number(prompt("Custo Luz:"));
internet = Number(prompt("Custo Internet:"));
gasolina = Number(prompt("Custo Gasolina:"));
streamings = Number(prompt("Custo Streamings:"));
telefone = Number(prompt("Custo Telefone:"));
outros = Number(prompt("Outros gastos:"));

// processamento
sobraTotal = salario - (moradia + agua + luz + internet + gasolina + streamings + telefone + outros);

// saida
console.log("--- Poupança do Mano Juca ---");
console.log("Sobrou para guardar com carinho: R$ " + sobraTotal.toFixed(2));