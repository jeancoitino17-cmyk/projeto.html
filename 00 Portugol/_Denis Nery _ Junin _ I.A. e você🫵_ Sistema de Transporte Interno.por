programa {
  funcao inicio() {
    logico emManutencao
    logico emergenciaAtiva

    escreva("A manutenção está ativa? ")
    leia(emManutencao)
    escreva("A emergencia está ativa? ")
    leia(emergenciaAtiva)
    se(emManutencao e emergenciaAtiva){
      escreva("Transporte liberado para uso.")
    }senao{
      escreva("Transporte indisponível por motivo de segurança.")
    }
  }
}
