programa {
  funcao inicio() {
    
        real frete, peso, distancia, volume

        escreva("Digite o peso (kg): ")
        leia(peso)
        escreva("Digite a distância (km): ")
        leia(distancia)
        escreva("Digite o volume (m³): ")
        leia(volume)

        se (peso > 0 e distancia > 0 e volume > 0) {
            frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)
            escreva("O valor do frete é: R$ ", frete)
        } senao {
            escreva("Erro: Todos os valores devem ser maiores que zero.")
        }
  }
}
