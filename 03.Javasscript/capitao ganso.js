// NOME: Política de Preços - Romero Brique
function calcularPrecoVenda() {
    let precoCusto;
    let precoVenda;
    let saida = document.getElementById("maquina de fumaça");

    // Entrada
    precoCusto = Number(prompt("Qual o valor de custo da obra (R$)?"));

    // Processamento:
    precoVenda = precoCusto * 3;

    // Saída 
    saida.innerHTML = `<strong>Obra de Arte - Romero Brique</strong><br>
      Custo: R$ ${precoCusto.toFixed(2)}<br>
      Preço de Venda (200% lucro): <strong>R$ ${precoVenda.toFixed(2)}</strong>`;
    saida.style.color = "darkblue";
}

function controleProvisoes() {
    let numeroMarujos;
    let quantidadeComida;
    let saida = document.getElementById("maquina de fumaça");

    // Entrada
    numeroMarujos = Number(prompt("Número de marujos?"));
    quantidadeComida = Number(prompt("Quantidade total de comida (kg)?"));

    // Processamento
    let comidaNecessaria = numeroMarujos * 1.5;

    if (numeroMarujos >= 10 && quantidadeComida >= comidaNecessaria) {
        let diasExtras = Math.floor(quantidadeComida / comidaNecessaria) - 1;
        saida.innerHTML = "Provisões suficientes. Rumo ao horizonte";
    } else {
        saida.innerHTML = "Algo está errado. Posseidom não quer ninguém no mar hoje.";
    }
}

function recrutarMarujo() {
    let sabeNadar;
    let idade;
    let temRecomendacao;
    let saida = document.getElementById("maquina de fumaça");

    // Entrada
    idade = Number(prompt("Idade do aspirante?"));
    sabeNadar = confirm("Sabe nadar?");
    temRecomendacao = confirm("Tem carta de recomendação?");

    // Processamento
    if (sabeNadar && idade > 16) {
        saida.innerHTML = "Aprovado para o navio!";
    } else if (!sabeNadar && temRecomendacao && idade >= 14) {
        saida.innerHTML = "Aprovado sob recomendação. Monitorar nas primeiras viagens.";
    } else {
        saida.innerHTML = "Reprovado. Volte quando estiver mais preparado para o mar.";
    }
}
function verificarFumaca() {
    let criancasPequenas;
    let velocidadeVento;
    let saida = document.getElementById("maquina de fumaça");

    // Entrada
    criancasPequenas = Number(prompt("Quantas crianças pequenas estão perto do palco?"));
    velocidadeVento = Number(prompt("Qual a velocidade do vento no salão (m/s)?"));

    // Processamento: 0 crianças E vento >= 0.5
    if (criancasPequenas === 0 && velocidadeVento >= 0.5) {
        saida.innerHTML = "Fumaça liberada. Que comecem os mistérios!";
        saida.style.color = "green";
    } else {
        saida.innerHTML = "Fumaça bloqueada. Aguardar condições ideais.";
        saida.style.color = "red";
    }
} function verificarDeslocamento() {
    let estaGripado;
    let tempoViagem;
    let saida = document.getElementById("maquina de fumaça");

    // Entrada

    estaGripado = confirm("Sarumano, você está gripado?");
    tempoViagem = Number(prompt("Qual o tempo de viagem em minutos?"));

    // Processamento 
    if (!estaGripado && tempoViagem < 45) {
        saida.innerHTML = "Viagem autorizada. Rumo ao show!";
        saida.style.color = "blue";
    } else {
        saida.innerHTML = "Deslocamento inviável. Melhor recusar este evento.";
        saida.style.color = "orange";
    }
}

function verificarEntradaPalco() {
    let somFuncionando;
    let figurinoCompleto;
    let saida = document.getElementById("maquina de fumaça");

    // Entrada
    somFuncionando = confirm("O sistema de som está funcionando?");
    figurinoCompleto = confirm("O figurino está completo (com o chapéu)?");

    // Processamento
    if (somFuncionando && figurinoCompleto) {
        saida.innerHTML = "Palco liberado para Sarumano! Luzes, câmera, ilusão!";
    }
    else if (!somFuncionando && figurinoCompleto) {
        saida.innerHTML = "Sem som. Realizar apresentação alternativa no salão.";
    }
    else if (somFuncionando && !figurinoCompleto) {
        saida.innerHTML = "Faltando parte do figurino. Te vira no improviso!";
    }
    else {
        saida.innerHTML = "Apresentação cancelada. Hora da mágica de desaparecer…";
    }
}
function verificarTransporte() {
    let emManutencao;
    let emergenciaAtiva;
    let saida = document.getElementById("maquina de fumaça");

    // Entrada
    emManutencao = confirm("O sistema está em manutenção?");
    emergenciaAtiva = confirm("Existe uma emergência ativa no parque?");

    // Processamento
    if (!emManutencao && !emergenciaAtiva) {
        saida.innerHTML = "Transporte liberado para uso.";
    } else {
        saida.innerHTML = "Transporte indisponível por motivo de segurança.";
    }
}
function acessarCentroComando() {
    let crachaValido;
    let digitalReconhecida;
    let saida = document.getElementById("maquina de fumaça");

    // Entrada
    crachaValido = confirm("O crachá está válido?");
    digitalReconhecida = confirm("A digital foi reconhecida pelo sensor?");

    // Processamento (Refatorado para diagnósticos específicos)
    if (crachaValido && digitalReconhecida) {
        saida.innerHTML = "✅ Acesso liberado ao Centro de Comando";
        saida.style.color = "green";
    }
    else if (!crachaValido && digitalReconhecida) {
        saida.innerHTML = "🪪 Crachá inválido. Dirija-se à recepção";
        saida.style.color = "orange";
    }
    else if (crachaValido && !digitalReconhecida) {
        saida.innerHTML = "☝️ Falha na digital. Tente novamente ou chame o suporte";
        saida.style.color = "orange";
    }
}
function controlarJaulas() {
    let visitantesNaArea;
    let horaAtual;
    let saida = document.getElementById("maquina de fumaça");

    // Entrada
    visitantesNaArea = Number(prompt("Quantos visitantes há na área das jaulas?"));
    horaAtual = Number(prompt("Qual a hora atual (0-23)?"));

    // Processamento
    let horarioPermitido = (horaAtual < 8 || horaAtual > 18);
    // saida
    if (visitantesNaArea === 0 && horarioPermitido) {
        saida.innerHTML = "🔓 Liberação autorizada. Abrindo jaula.";
        saida.style.color = "blue";
    } else {
        saida.innerHTML = "🔒 Liberação negada. Área em uso ou fora do horário permitido.";
        saida.style.color = "red";
    }
}