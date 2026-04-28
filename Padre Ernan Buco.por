programa {
    funcao inicio() {
        real custos, recebido, falta

        escreva("Custos mensais da igreja: ") leia(custos)
        escreva("Valor recebido hoje: ") leia(recebido)

        falta = custos - recebido

        se (falta <= 0) {
            escreva("Glória! Todos os custos foram pagos e sobrou R$ ", (falta * -1))
        } senao {
            escreva("Ainda faltam R$ ", falta, " para cobrir as contas.\n")
            escreva("Lembre os fiéis de que toda contribuição é bem-vinda!")
        }
    }
}