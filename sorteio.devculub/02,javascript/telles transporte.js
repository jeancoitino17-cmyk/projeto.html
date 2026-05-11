// info
let pesoBalança;
let tara ;
let Peso_carga; 
// entradas
pesoBalança = Number(prompt("Digite o peso indicado na balança (Peso Bruto Total):"));
tara = Number(prompt("Digite a tara do caminhão (conforme a plaqueta):"));
// processamento
Peso_carga = pesoBalança - tara;
// saída
alert("O peso da carga é R$:" + Peso_carga.toFixed(2))
console.log(Peso_carga)