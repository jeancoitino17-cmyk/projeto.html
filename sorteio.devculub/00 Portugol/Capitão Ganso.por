programa {
    funcao inicio() {
        real gastos, fatIngressos, fatItens, lucro, percLucro

        escreva("Gastos com suprimentos: ") leia(gastos)
        escreva("Faturamento com ingressos: ") leia(fatIngressos)
        escreva("Faturamento com itens: ") leia(fatItens)

        lucro = (fatIngressos + fatItens) - gastos
        percLucro = (lucro / gastos) * 100

        escreva("Lucro Total: R$ ", lucro, "\n")
        escreva("Percentual de Lucro: ", percLucro, "%\n")

        se (fatIngressos > fatItens) {
            escreva("Capitão, os INGRESSOS dão mais lucro.")
        } senao se (fatItens > fatIngressos) {
            escreva("Capitão, os ITENS dão mais lucro.")
        } senao {
            escreva("Capitão, ambas as fontes faturam igual.")
        }
  }
}
