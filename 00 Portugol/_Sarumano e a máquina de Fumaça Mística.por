programa {
  funcao inicio() {
    inteiro criancasPequenas
    real velocidadeVento
    escreva("Quantas crianças pequenas tem?")
    leia(criancasPequenas)
    escreva("Cual e a velocidade do vento?")
    leia(velocidadeVento)
    se(criancasPequenas/velocidadeVento >= 0.5){
      escreva("Fumaça liberada. Que comecem os mistérios!")
    }senao{
      escreva("Fumaça bloqueada. Aguardar condições ideais.")
    }
  }
}
