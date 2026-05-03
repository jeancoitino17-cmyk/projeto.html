programa {
  funcao inicio() {
    real pesoBalanca, tara, carga, limiteCarga, limitePBT

        escreva("Peso na balança (PBT atual): ") leia(pesoBalanca)
        escreva("Tara (peso vazio): ") leia(tara)
        escreva("Limite de carga (L) da plaqueta: ") leia(limiteCarga)
        escreva("Limite de PBT da plaqueta: ") leia(limitePBT)

        carga = pesoBalanca - tara
        escreva("Peso da carga atual: ", carga, " kg\n")

        se (carga > limiteCarga) {
            escreva("ALERTA: Limite de carga útil excedido!\n")
        }
        
        se (pesoBalanca > limitePBT) {
            escreva("ALERTA: Peso Bruto Total (PBT) excedido!\n")
        }

        se (carga <= limiteCarga e pesoBalanca <= limitePBT) {
            escreva("Pesagem confirmada. Veículo dentro dos limites.")
        }
  }
}
