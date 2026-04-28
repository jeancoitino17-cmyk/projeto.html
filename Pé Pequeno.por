programa {
  funcao inicio() {
   
        real preco, vale
        inteiro quantidade

        escreva("Preço do par: ") leia(preco)
        escreva("Quantidade de pares: ") leia(quantidade)

        se (preco <= 0 ou quantidade <= 0) {
            escreva("Erro: Valores inválidos.")
        } senao se (quantidade > 100) {
            escreva("Limite excedido. Entre em contato diretamente com a fábrica.")
        } senao {
            vale = preco * quantidade
            escreva("O valor do vale-troca é: R$ ", vale)
        }
    }
}
  
