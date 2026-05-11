programa {
    funcao inicio() {
        real salarioMensal, valorDia, salarioSemana, rendaFreela, rendaTotal, percFreela
        inteiro diasTrabalhados

        escreva("Salário mensal: ") leia(salarioMensal)
        escreva("Dias trabalhados no mês: ") leia(diasTrabalhados)
        escreva("Ganho com freelas no mês: ") leia(rendaFreela)

        valorDia = salarioMensal / diasTrabalhados
        salarioSemana = valorDia * 5 // Escala 5x2
        
        rendaTotal = salarioMensal + rendaFreela
        percFreela = (rendaFreela / rendaTotal) * 100

        escreva("Valor por dia: R$ ", valorDia, "\n")
        escreva("Salário semanal (5x2): R$ ", salarioSemana, "\n")
        escreva("Os freelas representam ", percFreela, "% da sua renda total.")
    }
  }
}
