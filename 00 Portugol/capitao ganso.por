programa {
  funcao inicio() {
// Declaração de variáveis
		real gastos, fat_ingressos, fat_itens, fat_total, lucro_reais, lucro_percentual

		// Entrada de dados
		escreva("Digite o gasto com suprimentos e mercadorias: R$ ")
		leia(gastos)

		escreva("Digite o faturamento com ingressos: R$ ")
		leia(fat_ingressos)

		escreva("Digite o faturamento com itens: R$ ")
		leia(fat_itens)

		// Cálculos
		fat_total = fat_ingressos + fat_itens
		lucro_reais = fat_total - gastos

		// Cálculo do lucro percentual com base nos gastos (conforme o exemplo do Caso 01)
		// Nota: No exemplo fornecido, 4500 é 56.25% de 8000.
		lucro_percentual = (lucro_reais / gastos) * 100

		// Exibição dos resultados
		escreva("\n----------------------------------------")
		escreva("\n   RELATÓRIO FINANCEIRO DO CAPITÃO")
		escreva("\n----------------------------------------")
		escreva("\nLucro obtido em reais: R$ ", lucro_reais)
		escreva("\nLucro percentual: ", lucro_percentual, "%")
		escreva("\n----------------------------------------\n")
    
  }
}
