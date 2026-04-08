programa {
  funcao inicio() {
    // Variáveis
		real preco_compra, lucro, preco_venda
		
		escreva("=== SISTEMA DE PRECIFICAÇÃO: ROMERO BRIQUE ===\n")

		// Entrada de dados
		escreva("Quanto você pagou pela obra de arte? R$ ")
		leia(preco_compra)

		// Cálculos
		// 200% de lucro é o mesmo que multiplicar o custo por 2
		lucro = preco_compra * 2.0
		preco_venda = preco_compra + lucro

		// Exibição dos resultados
		escreva("\n--------------------------------------------")
		escreva("\nResumo da Obra:")
		escreva("\nValor de Compra: R$ ", preco_compra)
		escreva("\nValor do Lucro (200%): R$ ", lucro)
		escreva("\nPreço sugerido para Venda: R$ ", preco_venda)
		escreva("\n--------------------------------------------\n")
  }
}
