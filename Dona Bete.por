programa {
  funcao inicio() {
    real bruto, premios, presentes, comissoes, lucro, meta

        escreva("Bruto total: ") leia(bruto)
        escreva("Premiações pagas: ") leia(premios)
        escreva("Gastos com presentes: ") leia(presentes)
        escreva("Comissões: ") leia(comissoes)
        escreva("Meta de lucro: ") leia(meta)

        lucro = bruto - premios - presentes - comissoes
        escreva("Lucro do dia: R$ ", lucro, "\n")

        se (lucro >= meta) {
            escreva("Parabéns, Dona Bete! A meta foi atingida!")
        } senao {
            escreva("A meta não foi atingida. Faltaram: R$ ", (meta - lucro))
        }
    }
}
