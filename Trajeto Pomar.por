programa {
    funcao inicio() {
        inteiro inicial, final, vendidas

        escreva("Estoque inicial: ") leia(inicial)
        escreva("Estoque final: ") leia(final)

        vendidas = inicial - final
        escreva("Laranjas vendidas hoje: ", vendidas, "\n")

        se (final == 0) {
            escreva("AVISO: Estoque zerado! Aumentar estoque para o próximo dia.")
        }
    }
}
