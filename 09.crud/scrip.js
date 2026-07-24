// C >> Create  >> Cadastrar
// R   >> Read   >> Ler
// U   >>  Update  >> alterar/atualizar/editar/fuçar/mudar
// D   >>  Delete  >> Apagar/deletar/excluir

// ctrl + ;

// const nomes = []
// const alturas = []




// console.log(dino);

let dinos = []

function salvarDados(){
    localStorage.setItem('dinos', JSON.stringify(dinos))
    
    // let texto = JSON.stringify(dinos)
    // localStorage.setItem('dinos', texto)
}

function carregarDados(){
    dinos = JSON.parse(localStorage.getItem('dinos')) || []
    
    // let textoLido = localStorage.getItem('dinos')
    // dinos = JSON.parse(textoLido)
}

function cadastrarDino() {

    carregarDados()

    const novoDino = {
        id: Date.now(),
        nome: document.getElementById('input-nome').value,
        altura: Number(document.getElementById("input-altura").value),
        cor: document.getElementById("input-cor").value,
        custo: Number(document.getElementById("input-custo").value),
    }
    dinos.push(novoDino)

    console.log(dinos);

    limparFormulario()
    mostrarTodos()

    salvarDados()
}

function limparFormulario() {
    document.getElementById('input-nome').value = ''
    document.getElementById('input-altura').value = ''
    document.getElementById('input-cor').value = ''
    document.getElementById('input-custo').value = ''
    document.getElementById('input-id').value = ''

    document.getElementById('input-nome').focus()
}

function mostrarTodos(){
    document.getElementById('painel-dinos').innerHTML = '' 

    for(let i=0; i<dinos.length; i++){
        // alert(dinos[i].nome)
        document.getElementById('painel-dinos').innerHTML += 
        `<div class="card-dino">
            <h2>${dinos[i].nome}</h2>
            <p>Altura: ${dinos[i].altura}</p>
            <p>Cor: ${dinos[i].cor}</p>
            <p>Custo: ${dinos[i].custo}</p>
            <p>${dinos[i].id}</p>
        
        </div>
        ` 
    }
}


function testar() {
    
    // window.location.href = 'teste.html'

    carregarDados()

    localStorage.setItem('teste', 45)

    let testeDeLeitura = localStorage.getItem('teste')
    console.log(testeDeLeitura);

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

    mostrarTodos();
    console.log(dinos);
}
    

function pesquisar(){
    let nomeProcurado = document.getElementById('input-nome').value

    for(let i = 0; i<dinos.length; i++){
        if(nomeProcurado == dinos[i].nome ){
            console.log(dinos[i]);
            document.getElementById('input-altura').value = dinos[i].altura
            document.getElementById('input-cor').value = dinos[i].cor
            document.getElementById('input-custo').value = dinos[i].custo
            document.getElementById('input-id').value = dinos[i].id
            console.log(i);
        }
        
    }

}

function salvarDino(){
    let id = Number(document.getElementById('input-id').value)

    for(let i = 0; i<dinos.length; i++){
        if(id == dinos[i].id ){
            console.log(dinos[i]);
            dinos[i].altura = document.getElementById('input-altura').value 
            dinos[i].cor = document.getElementById('input-cor').value 
            dinos[i].custo = document.getElementById('input-custo').value 
            dinos[i].id = document.getElementById('input-id').value 
            console.log(i);
        }
    }

    mostrarTodos()
    limparFormulario()
}

function excluirDino() {
    let id = Number(document.getElementById('input-id').value)

    for(let i = 0; i<dinos.length; i++){
        if(id == dinos[i].id ){
            console.log(dinos[i]);
            dinos.splice(i, 1)
            console.log(i);
        }
    }

    mostrarTodos()
    limparFormulario()
}