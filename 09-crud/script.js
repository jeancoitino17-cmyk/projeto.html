
// C >> Create >> cadastrar

// R >> Read >> ler

// U >> Update >> alterara/autualizar/editar

// D Delet >> Apagar >> deletar/excluir 



// const nomes = []
// const alturas = []



// console.log(dino);


let dinos = []

function cadastrarDino() {
    const novoDino = {
        id: Date.now(),
        nome: document.getElementById('input-nome').value,
        altura: Number(document.getElementById('input-altura').value),
        cor: document.getElementById('input-cor').value,
        custo: Number(document.getElementById('input-custo').value),
    }
    dinos.push(novoDino)

    console.log(dinos)

    linparFormulario()
}
function mostraTodos(){
 
    for(let i=0; i<dinos.length; i++ ){
        // alert(dinos[i].nome)
        document.getElementById('painel-dinos').innerHTML+= 
        `<p class = card-dinos>${dinos[i].nome}</P>`
        
    }
}

function teste() {
const dinos = [
    {
        id: 1718312000001,
        nome: "Distortu Rex",
        altura: 5.5,
        cor: "#4A0E4E", // Roxo Escuro / Distorcido
        custo: 180000
    },
    {
        id: 1718312000002,
        nome: "Anquilossauro",
        altura: 1.7,
        cor: "#8B5A2B", // Bronze / Marrom Couraça
        custo: 110000
    },
    {
        id: 1718312000003,
        nome: "Velociraptor",
        altura: 1.0,
        cor: "#2E8B57", // Verde Oceano
        custo: 65000
    },
    {
        id: 1718312000004,
        nome: "Titanossauro",
        altura: 15.0,
        cor: "#708090", // Cinza Slate (Robusto)
        custo: 300000
    },
    {
        id: 1718312000005,
        nome: "Quetzalcoatlus",
        altura: 4.5,
        cor: "#FF8C00", // Laranja Escuro (Pena/Pele)
        custo: 125000
    }
];

console.log(dinos);
}