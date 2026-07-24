// C >> Create  >> Cadastrar
// R   >> Read   >> Ler
// U   >>  Update  >> alterar/atualizar/editar/fuçar/mudar
// D   >>  Delete  >> Apagar/deletar/excluir



// const nomes = []
// const alturas = []




// console.log(entregas);

let entregas  = []

function salvarentrga(){
    localStorage.setItem('entregas', JSON.stringify(entregas))
}

function carregarDados() {
    entregas = JSON.parse(localStorage.getItem('entregas'))
}

function cadastarEntrega(){
    const novaEntrega = {
        id: Date.now(),
        nome: document.getElementById('input-nome').value,
        data: new Date(document.getElementById("input-data").value),
        validade: Number(document.getElementById("input-validade").value),
    }
    entregas.push(novaEntrega)
    console.log(entregas)
    
    verificar_Pendentes()
    verificar_Treinamento()

    // realizados()
}



// let dataEntrega = new Date()

function verificar_Pendentes(){
    
    
    let hoje = new Date()
    console.log(entregas[0].data);

    console.log(hoje);

    console.log(hoje > entregas[0].data);
    console.log( entregas[0].data > hoje);
    

    

    // const pendentes = {
        
    // }
}

function verificar_Treinamento(){
    const treinamento = {

    }
}

function verificar_realizados(){
    let nomeProcurado = document.getElementById('input-nome').value
    for (let i = 0; i < entregas.length; i++) {
        if (nomeProcurado == entregas[i].nome) {
            console.log(entregas[i].nome)
            document.getElementById('input-data').value = entregas[i].data
            document.getElementById('input-validade').value = entregas[i].validade
            console.log(i);
        }
    }
}