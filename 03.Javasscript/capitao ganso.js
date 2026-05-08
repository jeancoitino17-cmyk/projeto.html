let resposta = document.getElementById('resultado')


function verificarCorridaLuz() {
    // - infos -
    let distancia, velocidadeLuz, tempoSegundos;
    let mensagem = '';

    // - entradas -
    distancia = Number(prompt("Distância (km): "));
    velocidadeLuz = 300000;

    // - processamento -
    if (distancia <= 0 || isNaN(distancia)) {
        resposta.innerHTML = "<br>⚠️ Insira uma distância válida!";
        return;
    }

    tempoSegundos = distancia / velocidadeLuz;

    // ETAPA 1: Ajuste para mostrar números muito pequenos
    let segundosFormatados = tempoSegundos < 1 ? tempoSegundos.toFixed(4) : tempoSegundos.toLocaleString();

    mensagem = `<br>🚀 <b>Resultados da Viagem:</b>`;
    mensagem += `Segundos: ${segundosFormatados} s<br>`;

    // verficar temposegundos 
    if (tempoSegundos >= 60) {
        let minutos = tempoSegundos / 60;
        mensagem = `Minutos: ${minutos.toFixed(2)} min<br>`;

        //  verificar minutos
        if (minutos >= 60) {
            let horas = minutos / 60;
            mensagem = `Horas: ${horas.toFixed(2)} h<br>`;

        // verificar hora
            if (horas >= 24) {
                let dias = horas / 24;
                mensagem = `Dias: ${dias.toFixed(2)} dias<br>`;

                // verificar dias
                if (dias >= 30) {
                    let meses = dias / 30;
                    mensagem = `Meses: ${meses.toFixed(2)} meses<br>`;

                    // verificar meses
                    if (meses >= 12) {
                        let anos = meses / 12;
                        mensagem = `Anos: ${anos.toFixed(2)} anos<br>`;
                    }
                }
            }
        }
    }

    // - saídas -
    resposta.innerHTML = mensagem;
}



function verificarMeta() {
    // infos
    let totalBruto, premiacoes, presentes, comissoes, lucro
    let meta
    // entradas
    totalBruto = Number(prompt("Total bruto: "))
    premiacoes = Number(prompt("Premiações: "))
    presentes = Number(prompt("Presentinhos: "))
    comissoes = Number(prompt("Comissões: "))
    meta = Number(prompt("Meta de hoje:"))
    // processamento
    lucro = totalBruto - premiacoes - presentes - comissoes
    let mensagem = ''
    if (lucro >= meta) {
        // bateu a meta - 
        mensagem = '👵Batemos a meta, lucro de R$' + lucro.toFixed(2).replace('.', ',')
    } else {
        // não bateu a meta
        if (lucro > 0) {
            // sem meta mas com lucro
            mensagem = 'Não batemos a meta, mas tivemos lucro de R$' + lucro.toFixed(2).replace('.', ',')
        } else {
            // sem meta e prejuízo
            let prejuizo = lucro * -1
            mensagem = '💀☠️⚔️🗡️🔫🦵Não batemos a meta e ainda tivemos prejuízo de R$' + prejuizo.toFixed(2).replace('.', ',')
        }
    }
    // saídas
    resposta.innerHTML = "<br>Lucro de hoje: R$" + lucro.toFixed(2).replace('.', ',') +
        '<br>' + mensagem


}


function revelarRecreio() {
    document.getElementById('resultado').innerHTML =
        '<br>Início: 20:30' +
        '<br>Fim: 20:45' +
        '<br>Chamada: 20:50'
}

function calcularParImpar() {
    let n = Number(prompt("Digita número, meu consagrado:"))
    if (n % 2 == 0) {
        alert("Par")
    } else {
        alert("Ímpar")
    }
}


function mostrarDiaDaSemana() {
    // infos
    let numero, dia
    // leitura
    numero = Number(prompt("Digita o número: "))
    // processamento
    if (numero == 1) {
        dia = "Domingo"
    } else if (numero == 2) {
        dia = "Segunda"
    } else if (numero == 3) {
        dia = "Terça"
    } else if (numero == 4) {
        dia = "Quarta"
    } else if (numero == 5) {
        dia = "Quinta"
    } else if (numero == 6) {
        dia = "Sexta"
    } else if (numero == 7) {
        dia = "Sábado"
    } else {
        dia = "Erro #404, dia não encontrado."
    }
    // saídas
    document.getElementById('resultado').innerHTML = 'Dia escolhido: ' + dia
}

function verificarCreditoAvalon() {
    let salario;
    let valorEmprestimo;
    let parcelas;
    let taxaJuros = 0.02; // Exemplo: 2% de juros ao mês para o bônus
    let saida = document.getElementById("maquina de fumaça");

    // Entrada de dados
    salario = Number(prompt("Qual o salário do colaborador (R$)?"));
    valorEmprestimo = Number(prompt("Qual o valor do empréstimo solicitado (R$)?"));
    parcelas = Number(prompt("Em quantas parcelas deseja pagar?"));

    // Validação: Nenhum valor pode ser zero ou negativo
    if (salario <= 0 || valorEmprestimo <= 0 || parcelas <= 0 || isNaN(salario)) {
        alert("🚨 Erro: Informe valores válidos e maiores que zero!");
        saida.innerHTML = "Operação cancelada: dados inválidos.";
        saida.style.color = "red";
        return;
    }

    let montanteTotal = valorEmprestimo * Math.pow((1 + taxaJuros), parcelas);
    let valorPrestacao = montanteTotal / parcelas;

    // processamento 
    let limiteSalarial = salario * 0.30;

    // saida
    if (valorPrestacao <= limiteSalarial) {
        saida.innerHTML = `<strong>Plumas de Avalon - Crédito Aprovado</strong><br>
        Salário: R$ ${salario.toFixed(2)}<br>
        Total com Juros (2% a.m.): R$ ${montanteTotal.toFixed(2)}<br>
        Valor da Parcela: <strong>R$ ${valorPrestacao.toFixed(2)}</strong><br>
        Status: ✅ Empréstimo Concedido!`;
        saida.style.color = "darkgreen";
        alert("Parabéns! O empréstimo foi aprovado.");
    } else {
        saida.innerHTML = `<strong>Plumas de Avalon - Crédito Negado</strong><br>
        Valor da Parcela (R$ ${valorPrestacao.toFixed(2)}) excede o limite de 30% 
        do salário (R$ ${limiteSalarial.toFixed(2)}).<br>
        Status: ❌ Tente um número maior de parcelas ou valor menor.`;
        saida.style.color = "darkred";
        alert("Infelizmente o valor da prestação ficou muito alto para o seu salário.");
    }
}


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
    let resposta = document.getElementById("maquina de fumaça");

    // Entrada
    numeroMarujos = Number(prompt("Número de marujos?"));
    quantidadeComida = Number(prompt("Quantidade total de comida (kg)?"));

    // Processamento
    let comidaNecessaria = numeroMarujos * 1.5;

    if (numeroMarujos >= 10 && quantidadeComida >= comidaNecessaria) {
        let diasExtras = Math.floor(quantidadeComida / comidaNecessaria) - 1;
        resposta.innerHTML = "Provisões suficientes. Rumo ao horizonte";
    } else {
        resposta.innerHTML = "Algo está errado. Posseidom não quer ninguém no mar hoje.";
    }
}

function recrutarMarujo() {
    let sabeNadar;
    let idade;
    let temRecomendacao;
    let resposta = document.getElementById("maquina de fumaça");

    // Entrada
    idade = Number(prompt("Idade do aspirante?"));
    sabeNadar = confirm("Sabe nadar?");
    temRecomendacao = confirm("Tem carta de recomendação?");

    // Processamento
    if (sabeNadar && idade > 16) {
        resposta.innerHTML = "Aprovado para o navio!";
    } else if (!sabeNadar && temRecomendacao && idade >= 14) {
        resposta.innerHTML = "Aprovado sob recomendação. Monitorar nas primeiras viagens.";
    } else {
        resposta.innerHTML = "Reprovado. Volte quando estiver mais preparado para o mar.";
    }
}
function verificarFumaca() {
    let criancasPequenas;
    let velocidadeVento;
    let resposta = document.getElementById("maquina de fumaça");

    // Entrada
    criancasPequenas = Number(prompt("Quantas crianças pequenas estão perto do palco?"));
    velocidadeVento = Number(prompt("Qual a velocidade do vento no salão (m/s)?"));

    // Processamento: 0 crianças E vento >= 0.5
    if (criancasPequenas === 0 && velocidadeVento >= 0.5) {
        resposta.innerHTML = "Fumaça liberada. Que comecem os mistérios!";
        resposta.style.color = "green";
    } else {
        resposta.innerHTML = "Fumaça bloqueada. Aguardar condições ideais.";
        resposta.style.color = "red";
    }
} function verificarDeslocamento() {
    let estaGripado;
    let tempoViagem;
    let resposta = document.getElementById("maquina de fumaça");

    // Entrada

    estaGripado = prompt("Sarumano, você está gripado?");
    tempoViagem = Number(prompt("Qual o tempo de viagem em minutos?"));

    // Processamento 
    if (!estaGripado && tempoViagem < 45) {
        resposta.innerHTML = "Viagem autorizada. Rumo ao show!";
        resposta.style.color = "blue";
    } else {
        resposta.innerHTML = "Deslocamento inviável. Melhor recusar este evento.";
        resposta.style.color = "orange";
    }
}

function verificarEntradaPalco() {
    let somFuncionando;
    let figurinoCompleto;
    let resposta = document.getElementById("maquina de fumaça");

    // Entrada
    somFuncionando = confirm("O sistema de som está funcionando?");
    figurinoCompleto = confirm("O figurino está completo (com o chapéu)?");

    // Processamento
    if (somFuncionando && figurinoCompleto) {
        resposta.innerHTML = "Palco liberado para Sarumano! Luzes, câmera, ilusão!";
    }
    else if (!somFuncionando && figurinoCompleto) {
        resposta.innerHTML = "Sem som. Realizar apresentação alternativa no salão.";
    }
    else if (somFuncionando && !figurinoCompleto) {
        resposta.innerHTML = "Faltando parte do figurino. Te vira no improviso!";
    }
    else {
        resposta.innerHTML = "Apresentação cancelada. Hora da mágica de desaparecer…";
    }
}
function verificarTransporte() {
    let emManutencao;
    let emergenciaAtiva;
    let resposta = document.getElementById("maquina de fumaça");

    // Entrada
    emManutencao = confirm("O sistema está em manutenção?");
    emergenciaAtiva = confirm("Existe uma emergência ativa no parque?");

    // Processamento
    if (!emManutencao && !emergenciaAtiva) {
        resposta.innerHTML = "Transporte liberado para uso.";
    } else {
        resposta.innerHTML = "Transporte indisponível por motivo de segurança.";
    }
}
function acessarCentroComando() {
    let crachaValido;
    let digitalReconhecida;
    let resposta = document.getElementById("maquina de fumaça");

    // Entrada
    crachaValido = confirm("O crachá está válido?");
    digitalReconhecida = confirm("A digital foi reconhecida pelo sensor?");

    // Processamento (Refatorado para diagnósticos específicos)
    if (crachaValido && digitalReconhecida) {
        resposta.innerHTML = "✅ Acesso liberado ao Centro de Comando";
        resposta.style.color = "green";
    }
    else if (!crachaValido && digitalReconhecida) {
        resposta.innerHTML = "🪪 Crachá inválido. Dirija-se à recepção";
        resposta.style.color = "orange";
    }
    else if (crachaValido && !digitalReconhecida) {
        resposta.innerHTML = "☝️ Falha na digital. Tente novamente ou chame o suporte";
        resposta.style.color = "orange";
    }
}
function controlarJaulas() {
    let visitantesNaArea;
    let horaAtual;
    let resposta = document.getElementById("maquina de fumaça");

    // Entrada
    visitantesNaArea = Number(prompt("Quantos visitantes há na área das jaulas?"));
    horaAtual = Number(prompt("Qual a hora atual (0-23)?"));

    // Processamento
    let horarioPermitido = (horaAtual < 8 || horaAtual > 18);
    // saida
    if (visitantesNaArea === 0 && horarioPermitido) {
        resposta.innerHTML = "🔓 Liberação autorizada. Abrindo jaula.";
        resposta.style.color = "blue";
    } else {
        resposta.innerHTML = "🔒 Liberação negada. Área em uso ou fora do horário permitido.";
        resposta.style.color = "red";
    }
}