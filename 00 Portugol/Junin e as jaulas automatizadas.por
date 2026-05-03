programa {
  funcao inicio() {
    inteiro visitantesNaArea
    inteiro horaAtual

    escreva("o número de visitantes na área está sendo zero? ")
    leia(visitantesNaArea)
    escreva("Qual e ahora atual? ")
    leia(horaAtual)
    se(visitantesNaArea e horaAtual){
      escreva("Liberação autorizada. Abrindo jaula.")
    }senao{
      escreva("Liberação negada. Área em uso ou fora do horário permitido.")
    }
  }
}
