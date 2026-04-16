programa {
  funcao inicio() {
    // Declaração de variáveis
		real precoItem, saldoAtual

		// Entrada de dados
		escreva("Digite o preço do item: R$ ")
		leia(precoItem)

		escreva("Digite o seu saldo atual: R$ ")
		leia(saldoAtual)

		escreva("\n--- Resultado ---\n")

		// Lógica de decisão
		se (saldoAtual >= precoItem) 
		{
			escreva("Parabéns! Você tem saldo suficiente para comprar este item.")
			escreva("\nSaldo restante após a compra: R$ ", saldoAtual - precoItem)
		}
		senao 
		{
			escreva("Saldo insuficiente. Você precisa de mais R$ ", precoItem - saldoAtual, " para realizar a compra.")
		}
  }
}
