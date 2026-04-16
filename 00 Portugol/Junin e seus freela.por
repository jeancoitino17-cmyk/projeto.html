programa {
  funcao inicio() {
    // Variáveis
		real horas_estimadas, preco_cliente, lucro_junin
		const real CUSTO_DENIS = 500.0
		const real VALOR_HORA_JUNIN = 350.0

		escreva("=== SISTEMA DE ORÇAMENTOS: JUNIN FREELAS ===\n")

		// Entrada de dados
		escreva("Quantas horas o Denis Nery estimou para o projeto? ")
		leia(horas_estimadas)

		// Cálculos
		// O lucro do Junin é apenas o valor das horas dele
		lucro_junin = horas_estimadas * VALOR_HORA_JUNIN
		
		// O preço total para o cliente inclui o custo do consultor
		preco_cliente = lucro_junin + CUSTO_DENIS

		// Exibição dos resultados
		escreva("\n--------------------------------------------")
		escreva("\nORÇAMENTO FINAL PARA O CLIENTE:")
		escreva("\nValor total a cobrar: R$ ", preco_cliente)
		escreva("\n--------------------------------------------")
		escreva("\nDETALHAMENTO INTERNO (LUCRO DO JUNIN):")
		escreva("\nSeu lucro líquido será de: R$ ", lucro_junin)
		escreva("\n(R$ 500,00 serão repassados ao Denis Nery)")
		escreva("\n--------------------------------------------\n")
   

  }
}
