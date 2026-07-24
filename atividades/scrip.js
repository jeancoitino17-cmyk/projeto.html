const personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];

const personagems = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];

const personages = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates"
];


const personagenss = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates"
];

const personagemss = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates",
    "Junin"
];


const personagensp = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates",
    "Junin"
];

const personagenssa = [
    "Peba",
    "Bilu",
    "Waldisney"
];

const personagensn = [
    "Peba",
    "Bilu",
    "Waldisney",
    "GENéZio"
];

const personagensa = [
    "Peba",
    "Bilu",
    "Waldisney",
    "GENéZio"
];

const personagense = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates"
];

const personagensb = [
    "Tião",
    "Junin",
    "Padre Ernan Buco"
];

const personagensc = [
    "Tião",
    "Junin",
    "Padre Ernan Buco"
];
const personagensac = [
    "Rivaldo Jesus",
    "Kowalski",
    "GENéZio",
    "Waldisney"
];

function adicionarPersonagens() {
    personagens.push('Gill Bates');
    console.log(personagens)
}

function adicionarPersonagensNoinicio() {
    personagems.unshift("Dona Bete");
    console.log(personagems)

}

function removerOultimoPersonagem() {
    const indice = personages.indexOf("Gill Bates");
    if (indice !== -1) {
        personages.splice(indice, 1)
        console.log("Gill Betes foi removido!");
    } else {
        console.log("Gill Betes  não foi encontrado na lista.")
    }
    console.log(personages)
}

function removerOprimeiroPersonagem() {
    personagenss.shift("Lúcio Fernando")
    console.log(personagenss)

}

function removerOcapitaoGanso() {
    const indice = personagemss.indexOf("Capitão Ganso");
    if (indice !== -1) {
        personagemss.splice(indice, 1)
        console.log("Capitão Ganso foi removido!");
    } else {
        console.log("Capitão Ganso  não foi encontrado na lista.")
    }
    console.log(personagemss)
}

function removerVarios() {
    const indiceGill = personagensp.indexOf("Gill Bates");
    if (indiceGill !== -1) {
        personagensp.splice(indiceGill, 1);

    }

    const indiceJunin = personagensp.indexOf("Junin");
    if (indiceJunin !== -1) {
        personagensp.splice(indiceJunin, 1);
    }
    console.log(personagensp)
}

function adicionar() {
    personagenssa.push("Padre Ernan Buco")
    console.log(personagenssa)
}

function adicionarvarios() {
    personagenssa.unshift("GENéZio", "Kowalski");
    console.log(personagenssa)
}

function descobrirIndicew() {
    const indiceWalt = personagensn.indexOf("Waldisney");
    console.log("O indice do Waldisney é:", indiceWalt);
}

function verificar() {
    const exsteHeitor = personagensa.includes("Heitor Tuga");
    if (exsteHeitor) {
        console.log("Sim! Heitor Tuga  existe na lista.");
    } else {
        console.log("Não...Heitor Tuga não foi encontrado. ")
    }
}

function inverterLista(){
    personagense.reverse()
    console.log("Lista invertida:", personagense)
}

function removerJunin(){
     const indiceJunin = personagensb.indexOf("Junin");
    if (indiceJunin !== -1) {
        personagensb.splice(indiceJunin, 1);
    console.log("Junin foi removido!");
    } else {
        console.log("Junin  não foi encontrado na lista.")
    }
    console.log(personagensb)
}

function autulizarPersonagens(){
    personagensc.push("Dona Bete");
    personagensc.unshift("Mônica");
    console.log(personagensc)
}

function gerenciarElementos(){
    personagensac.shift("Rivaldo Jesus")
    personagensac.pop("Waldisney")
    console.log(personagensac)
}


function descobrirIndiceG() {
    const indiceGEN = personagensn.indexOf("GENéZio");
    console.log("O indice do GENéZio é:", indiceGEN);
}