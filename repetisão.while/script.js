function Rodarwhile() {
    let i = 0 //  1o pilar
    while (i < 50) { // 2o pilar
        i++ // 3o pilar 
        console.log(i);
    }

}

function RodarFor() {
    //  1o pilar
    for (let i = 0; i < 50; i++) { // 2o pilar
        i++ // 3o pilar 
        console.log(i);
    }

}

function rodarDowile() {
    let i = 100 // 1o pilar
    do { // 2o pilar
        i++ // 3o pilar 
        console.log(i);

    }while(i < 50)

}

function exemploDowhile(){
    let idade
    do{
        idade = Number(prompt("Digite sua idade:"))
    }while(idade < 18)
    alert("você entrou no sistema")
}

function exemploDowhileLimitado(){
    let idade
    let tentativas = 3
    do{
        idade = Number(prompt("Digite sua idade"))
        tentativas --
        console.log(tentativas)
    }while(idade < 18 && tentativas > 0)
        alert("Você entrou no sistema")
}