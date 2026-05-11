programa {
  funcao inicio() {
    // Variáveis
		inteiro qtd_shows, total_bombas
		real preco_unitario, custo_total
		const inteiro BOMBAS_POR_SHOW = 7 // Valor fixo definido no pedido

		escreva("=== PLANEJAMENTO DE SHOWS: SARUMANO ===\n")

		// Entrada de dados
		escreva("Quantos shows estão marcados na agenda? ")
		leia(qtd_shows)

		escreva("Qual o preço de cada bomba de fumaça? R$ ")
		leia(preco_unitario)

		// Cálculos
		total_bombas = qtd_shows * BOMBAS_POR_SHOW
		custo_total = total_bombas * preco_unitario

		// Exibição dos resultados
		escreva("\n----------------------------------------")
		escreva("\nRELATÓRIO DE COMPRAS:")
		escreva("\nTotal de bombas necessárias: ", total_bombas)
		escreva("\nCusto total de mobilização: R$ ", custo_total)
		escreva("\n----------------------------------------\n")
  }
}
