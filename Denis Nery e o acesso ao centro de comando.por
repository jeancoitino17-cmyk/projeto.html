programa {
  funcao inicio() {
    logico crachaValido
    logico digitalReconhecida

    escreva("O cracha está valido? ")
    leia(crachaValido)
    escreva(" A digital está sendo reconhecida? ")
    leia(digitalReconhecida)

    se(crachaValido e digitalReconhecida){
      escreva(" Acesso liberado ao Centro de Comando;")
    }senao{
      escreva("Crachá inválido. Dirija-se à recepção")
    }

    }

  }
}
