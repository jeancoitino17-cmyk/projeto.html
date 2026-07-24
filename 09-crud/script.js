// C >> Create >> cadastrar
// R >> Read >> ler
// U >> Update >> alterar/atualizar/editar
// D >> Delete >> Apagar >> deletar/excluir 

let dinos = [];

function cadastrarDino() {
    const novoDino = {
        id: Date.now(),
        nome: document.getElementById('input-nome').value,
        altura: Number(document.getElementById('input-altura').value),
        cor: document.getElementById('input-cor').value,
        custo: Number(document.getElementById('input-custo').value),
    };
    dinos.push(novoDino);
    console.log(dinos);
}

function limparFormulario() {
    document.getElementById("input-nome").value = "";
    document.getElementById("input-altura").value = "";
    document.getElementById("input-cor").value = "";
    document.getElementById("input-custo").value = "";
    document.getElementById("input-id").value = "";

    document.getElementById("input-nome").focus();
}

function mostrarTodos() {
    document.getElementById("painel-dinos").innerHTML = "";

    for (let i = 0; i < dinos.length; i++) {
        document.getElementById("painel-dinos").innerHTML += `
            <div class="card-dinos">
                <h2>${dinos[i].nome}</h2>
                <p>Altura: ${dinos[i].altura}m</p>
                <p>Cor: ${dinos[i].cor}</p>
                <p>Custo: R$ ${dinos[i].custo}</p>    
                <p>ID: ${dinos[i].id}</p>    
            </div>
        `;
    }
}

function teste() {
   
    dinos = [
        {
            id: 1718312000001,
            nome: "Distortu Rex",
            altura: 5.5,
            cor: "#4A0E4E", 
            custo: 180000
        },
        {
            id: 1718312000002,
            nome: "Anquilossauro",
            altura: 1.7,
            cor: "#8B5A2B", 
            custo: 110000
        },
        {
            id: 1718312000003,
            nome: "Velociraptor",
            altura: 1.0,
            cor: "#2E8B57", 
            custo: 65000
        },
        {
            id: 1718312000004,
            nome: "Titanossauro",
            altura: 15.0,
            cor: "#708090", 
            custo: 300000
        },
        {
            id: 1718312000005,
            nome: "Quetzalcoatlus",
            altura: 4.5,
            cor: "#FF8C00", 
            custo: 125000
        },
        {
            id: 1718312000006, 
            nome: "Mosasauro",
            altura: 4.5,
            cor: "#3b3d38ff", 
            custo: 125000
        },

    ];

    console.log(dinos);

    mostrarTodos(); 
}

function pesquisar(){
    let nomeProcurado = document.getElementById('input-nome').value

    for(let i = 0; i<dinos.length; i++){
        if (nomeProcurado == dinos[i].nome){
            console.log(dinos[i].nome)
            document.getElementById('input-altura').value = dinos[i].altura
            document.getElementById('input-cor').value = dinos[i].cor
            document.getElementById('input-custo').value = dinos[i].custo
            document.getElementById('input-id').value = dinos[i].id
            console.log(i); 
        }
    }
}

function salvardino(){
    let id = Number(document.getElementById('input-id').value)
    for(let i = 0; i<dinos.length; i++){
        if (id== dinos[i].id){
            console.log(dinos[i].nome)
            dinos[i].altura =  document.getElementById('input-altura').value
            dinos[i].cor = document.getElementById('input-cor').value 
            dinos[i].custo = document.getElementById('input-custo').value 
            dinos[i].id = document.getElementById('input-id').value 
            console.log(i); 
        }
    }

    mostrarTodos()
    limparFormulario()
}

function excluirDino(){
    let id = Number(document.getElementById('input-id').value)
    for(let i = 0; i<dinos.length; i++){
        if (id== dinos[i].id){
            dinos.splice(i, 1) 
        }
    }

    mostrarTodos()
    limparFormulario()
}