// NOME: Política de Preços - Romero Brique
function calcularPrecoVenda() {
    let precoCusto;
    let precoVenda;
    let saida = document.getElementById("maquina de fumaça");

    // Entrada
    precoCusto = Number(prompt("Qual o valor de custo da obra de arte ?"));

    // Processamento:
    precoVenda = precoCusto * 3;

    // Saída 
    saida.innerHTML = `<strong>Obra de Arte - Romero Brique</strong><br>
      Custo: R$ ${precoCusto.toFixed(2)}<br>
      Preço de Venda (200% lucro) =  ${precoVenda.toFixed(2)}`;
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
        saida.style.color = "black";
    } else {
        saida.innerHTML = "Algo está errado. Posseidom não quer ninguém no mar hoje.";
        saida.style.color = "red";
    }

    
}

function recrutarMarujo() {
    let sabeNadar;
    let idade;
    let temRecomendacao;
    let saida = document.getElementById("maquina de fumaça");

    // Entrada
    idade = Number(prompt("Idade do aspirante?"));
    sabeNadar = prompt("Sabe nadar?");
    temRecomendacao = prompt("Tem carta de recomendação?");

    // Processamento
    if (sabeNadar === "sim" && idade > 16) {
        saida.innerHTML = "Aprovado para o navio. Bem-vindo à tripulação!";
    } else if (sabeNadar === "sim" && temRecomendacao === "sim" && idade >= 14) {
        saida.innerHTML = "Aprovado sob recomendação. Monitorar nas primeiras viagens.";
         saida.style.color = "blue";
    } else {
        saida.innerHTML = "Reprovado. Volte quando estiver mais preparado para o mar.";
        saida.style.color = "red";
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

    estaGripado = prompt(" O Sarumano está gripado?");
    tempoViagem = Number(prompt("Qual o tempo de viagem em minutos?"));

    // Processamento 
    if (!estaGripado  === "sim" && tempoViagem < 45) {
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
    somFuncionando = prompt("O sistema de som está funcionando?");
    figurinoCompleto = prompt("O figurino está completo (com o chapéu)?");

    // Processamento
    if (somFuncionando === "sim" && figurinoCompleto === "sim") {
        saida.innerHTML = "Palco liberado para Sarumano! Luzes, câmera, ilusão!";
        saida.style.color = "blue";
    }
    else if (somFuncionando === "não" && figurinoCompleto === "sim") {
        saida.innerHTML = "Sem som. Realizar apresentação alternativa no salão.";
        saida.style.color = "orange";
    }
    else if (somFuncionando === "sim" && figurinoCompleto === "não") {
     
        saida.innerHTML = "Faltando parte do figurino. Te vira no improviso!";
        saida.style.color = "green";
    }
    else {
        saida.innerHTML = "Apresentação cancelada. Hora da mágica de desaparecer…";
        saida.style.color = "red";
    }
}
function verificarTransporte() {
    let emManutencao;
    let emergenciaAtiva;
    let saida = document.getElementById("maquina de fumaça");

    // Entrada
    emManutencao = prompt("O sistema está em manutenção?");
    emergenciaAtiva = prompt("Existe uma emergência ativa no parque?");

    // Processamento
    if (emManutencao === "sim" && emergenciaAtiva === "não") {
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
    crachaValido = prompt("O crachá está válido?");
    digitalReconhecida = prompt("A digital foi reconhecida pelo sensor?");

    // Processamento (Refatorado para diagnósticos específicos)
    if (crachaValido === "sim" && digitalReconhecida === "sim") {
        saida.innerHTML = "✅ Acesso liberado ao Centro de Comando";
        saida.style.color = "green";
    }
    else if (crachaValido === "não" && digitalReconhecida === "sim") {
        saida.innerHTML = "🪪 Crachá inválido. Dirija-se à recepção";
        saida.style.color = "orange";
    }
    else if (crachaValido === "sim" && digitalReconhecida === "não") {
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