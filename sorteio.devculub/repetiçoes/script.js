// let contador = 0 // inicializacao
//  while(contador < 10){ // code repe
//     alert("Contador:" + contador )
//    contador++  // contagem
// }// Voltar e testar novamente 

// let peso
// let contador = 0
// while (contador < 10) {
//     peso = Number(prompt("Digite o peso: "))
//     if (peso > 1.1 || peso < 0.9) {
//         alert("Fora tolerância do peso")
//     }
//     contador++
// }

// let i = 0 // inicialização
//  while(i < 3){ // cod repet
//  i++ //contagem 
// }

// let total = 0

// let i = 0 // inicialização
// while (i < 3) { // cod repet
//     i++ //contagem 
//     let preco = Number(prompt("digite o preço do " + i + "° produto:"))
//     total = total + preco
//     // total += preco

//     document.getElementById('total').innerHTML += i + "° produto: R$" + preco.toFixed(2) + "<br>"
// }

// alert(total)

// function crecente (){
// let numero = 1; // 1. Começa no 1
// while (numero <= 10)  // 2. Repete enquanto for maior ou igual a 1
//   alert(numero);    // 3. Mostra o número atual (1, depois 2, depois 3...)
//     numero ++;         // 4. Subtrai 1 para a próxima volta
// }// 4. Subtrai 1 para a próxima volta
        
  
//  let i = 10 // inicialização
//   while(i >= 0){ // cod repet
//     console.log(i);

//     i-- //contagem 
//  }

// // let i = 1
// while(i>20){
//     console.log(i);
//     i += 2
// }
// let contador = 0; // inicialização

// while (contador < 10) { // condição de repetição
//     console.log("Contador simples: " + contador);
//     contador++; // incremento (evita loop infinito)
// } // fecha o primeiro bloco corretamente

// // -------------------------------------------------------------

// // Exemplo 2: Verificação de peso para 10 itens
// let peso;
// let contadorPeso = 0; // Usando um nome diferente para não dar conflito

// while (contadorPeso < 10) {
//     peso = Number(prompt("Digite o peso do item " + (contadorPeso + 1) + ":"));
    
//     // Se o peso for maior que 1.1 OU menor que 0.9, dispara o alerta
//     if (peso > 1.1 || peso < 0.9) {
//         alert("Atenção: Peso fora da tolerância!");
//     } else {
//         alert("Peso dentro do padrão.");
//     }
    
//     contadorPeso++; // avança para o próximo item
// }


// 1. Quadrado de cada número de 1 a 10
function quadradoDe1a10() {
    alert("--- Quadrado de 1 a 10 ---");
    for (let i = 1; i <= 10; i++) {
        alert(`O quadrado de ${i} é ${i ** 2}`);
    }
}


// 2. Números de 10 a 1 em ordem decrescente
function decrescente10a1() {
    alert("--- Decrescente 10 a 1 ---");
    for (let i = 10; i >= 1; i--) {
        alert(i);
    }
}


// 3. Soma dos números de 1 a 100
function soma1a100() {
    let soma = 0;
    for (let i = 1; i <= 100; i++) {
        soma += i;
    }
    alert(`A soma de 1 a 100 é: ${soma}`);
}


// 4. Tabuada do 5
function tabuadaDo5() {
    alert("--- Tabuada do 5 ---");
    for (let i = 1; i <= 10; i++) {
        alert(`5 x ${i} = ${5 * i}`);
    }
}


// 5. Tabuada do número que o usuário pedir
function tabuadaUsuario() {
    let num = Number(prompt("Digite o número que deseja ver a tabuada:"));
    alert(`--- Tabuada do ${num} ---`);
    for (let i = 1; i <= 10; i++) {
        alert(`${num} x ${i} = ${num * i}`);
    }
}

// 6. Números ímpares de 1 a 20
function impares1a20() {
    alert("--- Ímpares de 1 a 20 ---");
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            alert(i);
        }
    }
}


// 7. Números de 1 a 10 em ordem crescente e depois decrescente
function crescenteEDecrescente() {
    alert("--- Crescente (1 a 10) ---");
    for (let i = 1; i <= 10; i++) {
        alert(i);
    }
    alert("--- Decrescente (10 a 1) ---");
    for (let i = 10; i >= 1; i--) {
        alert(i);
    }
}


// 8. Fatorial de um número dado
function calcularFatorial() {
    let num = Number(prompt("Digite um número para calcular o fatorial:"));
    let fatorial = 1;

    if (num < 0) {
        alert("Não existe fatorial de número negativo.");
    } else {
        for (let i = 1; i <= num; i++) {
            fatorial *= i;
        }
        alert(`O fatorial de ${num} é ${fatorial}`);
    }
}


// 9. FizzBuzz (1 a 100)
function fizzBuzz() {
   alert("--- FizzBuzz ---");
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            alert("FizzBuzz");
        } else if (i % 3 === 0) {
            alert("Fizz");
        } else if (i % 5 === 0) {
            alert("Buzz");
        } else {
            alert(i);
        }
    }
}

// 10. Valor da série: 1 + 1/2 + 1/3 + ... + 1/10
function calcularSerie() {
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += 1 / i;
    }
    alert(`O valor da série é: ${soma.toFixed(4)}`);
}


// 11. Quantos pares e ímpares até o número do usuário
function contarParesImpares() {
    let limite = Number(prompt("Digite um número limite para contar pares e ímpares:"));
    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    alert(`De 1 até ${limite} existem: ${pares} pares e ${impares} ímpares.`);
}


// 12. Maior e menor valor de uma lista
function maiorEMenorDaLista() {
    let lista = [23, 5, 87, 1, 44, 12, 9];
    
    // Math.max e Math.min precisam do "..." (spread operator) para ler arrays
    let maior = Math.max(...lista);
    let menor = Math.min(...lista);

    alert(`Lista: ${lista.join(", ")}`);
    alert(`Maior: ${maior} | Menor: ${menor}`);
}


// 13. Média de uma lista de números
function calcularMediaLista() {
    let numeros = [10, 20, 30, 40, 50];
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    let media = soma / numeros.length;
    alert(`A média dos números [${numeros}] é: ${media}`);
}


// 14. Verificar se um número é primo
function verificarSeEPrimo() {
    let num = Number(prompt("Digite um número para saber se é primo:"));
    let ePrimo = num > 1;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            ePrimo = false;
            break;
        }
    }

    if (ePrimo) {
        alert(`${num} é um número primo.`);
    } else {
        alert(`${num} NÃO é um número primo.`);
    }
}


// 15. Números primos de 1 a 50
function primos1a50() {
    alert("--- Primos de 1 a 50 ---");
    for (let num = 2; num <= 50; num++) {
        let ePrimo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                ePrimo = false;
                break;
            }
        }
        if (ePrimo) {
            alert(num);
        }
    }
}




// Descomente apenas a linha da função que você quer que o navegador execute:
// decrescente10a1();
// soma1a100();
// tabuadaDo5();
// tabuadaUsuario();
// impares1a20();
// crescenteEDecrescente();
// calcularFatorial();
// fizzBuzz();
// calcularSerie();
// contarParesImpares();
// maiorEMenorDaLista();
// calcularMediaLista();
// verificarSeEPrimo();
// primos1a50();
