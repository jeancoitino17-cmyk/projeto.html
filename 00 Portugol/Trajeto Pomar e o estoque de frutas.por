programa {
  funcao inicio() {
    
		inteiro estoque_inicial, estoque_final, laranjas_vendidas

		escreva("--- Trajeto Pomar: Controle de Estoque ---\n")
		escreva("Olá, Heitor Tuga. Por favor, insira os dados abaixo.\n\n")

	
		escreva("Quantidade inicial de laranjas: ")
		leia(estoque_inicial)

		escreva("Quantidade final de laranjas: ")
		leia(estoque_final)

	
		laranjas_vendidas = estoque_inicial - estoque_final

		
		escreva("\n-----------------------------------------")
		escreva("\nRelatório de Vendas:")
		escreva("\nForam vendidas ", laranjas_vendidas, " laranjas hoje.")
		escreva("\n-----------------------------------------\n")
  }
}
