
let times = [];
function estadoinicial(){
    return[
    "Gremio",
    "Nacional",
    "Flamengo",
    "Fluminense",
    "Mirasol",
    ];
}

function renderlista(){
    const lista = document.getElementById(".lista")
    lista.innerHTML = '';
    times.forEach(nome => {
        const div = document.createElement(".div");
            div.className =  'array-item';
            div.textContent = nome ;
            lista.appendChild(div)
        
    })
}

function mostrarResultado(texto){
    document.getElementById('resultado-texto').
    textContent = texto;
    
}

function verificarGremio(){
    const encontrado = times.includes
    ("Gremio");
    mostrarResultado('includes("Gremio") - > ' + encontrado);
}

    function descobrirIndiceNacional(){
        const indice = times.indexOf('Nacional');
        mostrarResultado('indexOf(Nacional)' + indice)
    }

     function removerFlamengo(){
        const indice = times.indexOf("Flamengo");
        times.splice(indice, 1);
        mostrarResultado('splice('+ indice +'), 1 ) - >  removido  "Famengo"');
        renderlista();
     }

     function inverterArray(){
        times.reverse();
        mostrarResultado('reverse() -> [' + personagens.join(', ') + ']');
        renderlista();
    } 
    
    reiniciar();
     

    document.getElementById('resultado-texto')


const futeis = [
    "Gremio",
    "Nacional",
    "Flamengo",
    "Fluminense",
    "Mirasol",
    "Palmeiras",
    "Remo",
    "Uruguay",
    "Argentina",
    "Paraguay"
];

const lista = document.getElementById("lista");
const seletor = document.getElementById("seletor");


for (let i = 0; i < futeis.length; i++) {
    const nome = futeis[i];

    
    if (lista && lista.children.length <= i) {
        const celula = document.createElement("div");
        celula.className = "celula";
        celula.id = "item - " + i;
        celula.innerHTML = `<span class="valor">${nome}</span><span class="idx">[${i}]</span>`;
        lista.appendChild(celula);
    }
 
        const opt = document.createElement("option");
        opt.value = nome;
        opt.textContent = nome;
        seletor.appendChild(opt);
    
}


function buscarTimesDefutebol() {
    const celulas = document.querySelectorAll(".celula");
    
    
    for (let i = 0; i < celulas.length; i++) {
        celulas[i].classList.remove("destaque");
    }
    //console.log(seletor)
    const nomeEscolhido = seletor.value;
    let indice = -1;
    let i = 0;
    
   
    while (i < futeis.length) {
        if (futeis[i] == nomeEscolhido) {
            indice = i;
            break;
        } 
        i++;
    } 

    
    document.getElementById("resultado").innerHTML = `"${nomeEscolhido}" está no índice ${indice}`;
    
    
    if (indice !== -1) {
        const elementoDestacado = document.getElementById("item - " + indice);
        if (elementoDestacado) {
            elementoDestacado.classList.add("destaque");
        }
    }
}

