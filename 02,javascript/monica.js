function calcularChanceRecrutamento(n) {
let peso = n;
let chance = (0.1/(1 + 500 * peso))*100;
alert("A chance do candidato é de " + chance.toFixed(4) + "%");
console.log(chance);
}

calcularChanceRecrutamento(2);