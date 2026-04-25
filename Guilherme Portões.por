programa {
  funcao inicio() {
    inteiro clt, estag, pj, total

        escreva("Quantidade CLT: ") leia(clt)
        escreva("Quantidade Estagiários: ") leia(estag)
        escreva("Quantidade PJ: ") leia(pj)

        total = clt + estag + pj
        escreva("Total de devs: ", total, "\n")

        se (clt >= (total / 2.0)) {
            escreva("A empresa segue a regra interna (50%+ CLT).")
        } senao {
            escreva("Atenção: Menos da metade da equipe é CLT!")
        }
    }
}
  