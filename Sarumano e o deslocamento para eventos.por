programa {
  funcao inicio() {
    logico estaGripado
    inteiro tempoViagem
    escreva("O sarumano estaGripado?")
    leia(estaGripado)
    escreva("Qual e o tempoViagem?")
    leia(tempoViagem)
    se( estaGripado e tempoViagem >= 45){
      escreva("Viagem autorizada. Rumo ao show!")
    }senao{
      escreva("Deslocamento inviável. Melhor recusar este evento.")
    }
  }
}