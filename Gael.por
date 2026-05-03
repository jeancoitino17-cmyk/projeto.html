programa {
  funcao inicio() {
    inteiro caminhoes, caminhoesAntigo, jares
        real faturamento, custo, lucro

        escreva("Caminhões na temporada atual: ") leia(caminhoes)
        escreva("Caminhões na temporada passada: ") leia(caminhoesAntigo)

        jares = caminhoes * 50
        custo = caminhoes * 450.0
        faturamento = jares * 90.0
        lucro = faturamento - custo

        escreva("Jarés vendidos: ", jares, "\n")
        escreva("Lucro da temporada: R$ ", lucro, "\n")

        se (caminhoes > caminhoesAntigo) {
            escreva("A quantidade de caminhões aumentou!")
        } senao se (caminhoes < caminhoesAntigo) {
            escreva("A quantidade de caminhões diminuiu.")
        } senao {
            escreva("A quantidade se manteve estável.")
        }
  }
}
