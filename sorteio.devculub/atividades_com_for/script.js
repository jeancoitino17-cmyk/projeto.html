function calcularSomaDe1a10() {
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += i;
    }
    console.log("A soma de 1 a 10 é: " + soma);
}

function tabuadaDo5() {
    let tabuada = 1;
    for (let i = 1; i <= 10; i++) {
        tabuada = 5 * i;
        console.log("5 x " + i + " = " + tabuada);
    }
}

function calcularQuadrado1a10() {
    let quadrado = 1;
    for (let i = 1; i <= 10; i++) {
        quadrado = i * i;
        console.log("O quadrado de " + i + " é: " + quadrado);
    }
}

function considerarPalavraJavaScript() {
    let palavra = "JavaScript";
    for (let i = 0; i < palavra.length; i++) {
        console.log("A letra na posição " + i + " é: " + palavra[i]);
    }
}

function MostrarOsMultiplosDe3Entre1e30() {
    let multiplos = [];
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            multiplos = (i);
        }
    }
    console.log("Os múltiplos de 3 entre 1 e 30 são: " + multiplos);
}

function imprimir10Asteriscos_Um_De_Cada_Vez() {
    let linha = "";

    for (let i = 0; i < 10; i++) {
        linha += "*";
    }

    console.log(linha);
}

function calcularSomaDosParesEntre1e20() {
    let soma = 0;
    for (let i = 2; i <= 20; i += 2) {
        soma += i;
    }
    console.log("A soma dos números pares entre 1 e 20 é: " + soma);
}

function mostrarOsNumerosDe0Ate50ContandoDe5Em5() {
    let numeros = [];
    for (let i = 0; i <= 50; i += 5) {
        console.log(i);
    }
}

function imprimirPalavraOla8Vezes() {
    let palavra = "Olá!";
    for (let i = 0; i < 8; i++) {
        console.log("Olá!");
    }
}

function calcularSomaDosImparesEntre1e15() {
    let soma = 0;
    for (let i = 1; i <= 15; i += 2) {
        soma += i;
    }
    console.log("A soma dos números ímpares entre 1 e 15 é: " + soma);
}

function Utilize_um_for_para_exibir_a_sequência_1_12_123_1234_12345() {
    let sequencia = "";
    for (let i = 1; i <= 5; i++) {
        sequencia += i;
        console.log(sequencia);
    }
}

function calcularFatorialDe5() {
    let fatorial = 1;
    for (let i = 1; i <= 5; i++) {
        fatorial *= i;
    }
    console.log("O fatorial de 5 é: " + fatorial);
}

function quantas_letras_o_existem_em_uma_palavraqualquer() {
    let palavra = "odontologia"; 
    let contador = 0;


    for (let i = 0; i < palavra.length; i++) {

        if (palavra[i] === 'o' || palavra[i] === 'O') {
            contador++;
        }
    }


    console.log("A palavra '" + palavra + "' contém " + contador + " letras 'o' ou 'O'.");
}
