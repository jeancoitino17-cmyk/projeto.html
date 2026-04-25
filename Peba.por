programa {
  funcao inicio() {
    inteiro vitorias, empates, pontos, totalPartidas, pontosPossiveis
        real aproveitamento

        escreva("Número de vitórias: ") leia(vitorias)
        escreva("Número de empates: ") leia(empates)
        escreva("Total de partidas disputadas: ") leia(totalPartidas)

        pontos = (vitorias * 3) + (empates * 1)
        pontosPossiveis = totalPartidas * 3
        aproveitamento = (pontos / (pontosPossiveis * 1.0)) * 100

        escreva("Pontuação total: ", pontos, "\n")
        escreva("Aproveitamento: ", aproveitamento, "%\n")

        se (aproveitamento > 70) {
            escreva("Este time é um forte candidato ao título!")
        } senao {
            escreva("O desempenho está abaixo dos campeões anteriores.")
        }
  }
}
