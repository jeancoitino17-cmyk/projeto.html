let idades = [18, 20, 12, 35, 14, 15, 38, 55, 98]
let precos = []

function arrays00() {
    // let i = 14
    // console.log("Idade" + idades[i]);

    // console.log(idade.length);
    //     console.log("Idade" + idades[0]);
    //     console.log("Idade" + idades[1]);
    //     console.log("Idade" + idades[2]);
    //     console.log("Idade" + idades[3]);
    //     console.log("Idade" + idades[4]);
    //     console.log("Idade" + idades[5]);

    // for (let i = 0; i < 6; i++) {
    //     console.log("Idade" + idades[i])
    // }

    for (let i = 0; idades.length; i++) {
        console.log("Idade" + idades[i])
    }

}

function addPrecos() {
    let n = Math.ceil(Math.random) * 100
    precos.push(n)
    console.log(precos);
}

function mostrarprodutos(){
    for(let i=0; i<produtos.length; i++){
        console.log(produtos[i])
        document.getElementById('lista-precos').innerHTML += '<p class=produtos> ' + produtos[i] + '</p>'
    }
}
let produtos = [
    "Smartphone", "Notebook", "Smart TV", "Fone de Ouvido Bluetooth", "Teclado Mecânico",
    "Mouse Gamer", "Monitor 4K", "Console de Videogame", "Smartwatch", "Caixa de Som Portátil",
    "Camiseta Algodão", "Calça Jeans", "Tênis Esportivo", "Jaqueta Corta-Vento", "Mochila Impermeável",
    "Cafeteira Elétrica", "Air Fryer", "Liquidificador", "Micro-ondas", "Geladeira Frost Free",
    "Ar Condicionado", "Aspirador de Pó", "Ventilador de Coluna", "Batedeira Planetária", "Sanduicheira",
    "Arroz Integral (1kg)", "Feijão Preto (1kg)", "Azeite de Oliva Extra Virgem", "Café Torrado", "Chocolate Amargo",
    "Suco de Laranja Integral", "Leite Condensado", "Creme de Leite", "Macarrão Espaguete", "Molho de Tomate",
    "Shampoo Anticaspa", "Condicionador Hidratante", "Sabonete Líquido", "Creme Dental", "Desodorante Roll-on",
    "Protetor Solar FPS 50", "Hidratante Corporal", "Perfume Importado", "Escova de Dentes Elétrica", "Toalha de Banho",
    "Caderno Universitário", "Caneta Esferográfica", "Livro de Ficção", "Luminária de Mesa", "Cadeira Ergonômica"
];