programa {
  funcao inicio() {
        inteiro relPF, relPJ, totalRel
        real tempoPF, tempoPJ, totalTempo, valorPF, valorPJ, totalValor
        real mediaValorPF, mediaValorPJ

        // Entradas
        escreva("Relatórios PF: ") leia(relPF)
        escreva("Valor Total PF: ") leia(valorPF)
        escreva("Relatórios PJ: ") leia(relPJ)
        escreva("Valor Total PJ: ") leia(valorPJ)

        totalRel = relPF + relPJ
        totalValor = valorPF + valorPJ
        
        mediaValorPF = valorPF / relPF
        mediaValorPJ = valorPJ / relPJ

        escreva("\n--- RELATÓRIO DO KOWALSKI ---\n")
        escreva("Total de Relatórios: ", totalRel, "\n")
        escreva("Faturamento Total: R$ ", totalValor, "\n")
        escreva("Média PF: R$ ", mediaValorPF, " | Média PJ: R$ ", mediaValorPJ, "\n")

        // Refatoração: Verificar se onde ganha mais é onde faz mais
        se (mediaValorPF > mediaValorPJ e relPF >= relPJ) {
            escreva("Análise: Você está investindo certo nos relatórios PF!")
        } senao se (mediaValorPJ > mediaValorPF e relPJ >= relPF) {
            escreva("Análise: Você está investindo certo nos relatórios PJ!")
        } senao {
            escreva("Alerta: Você está fazendo mais relatórios do tipo que paga menos.")
        }
  }
}
