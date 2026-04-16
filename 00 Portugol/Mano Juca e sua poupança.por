programa {
  funcao inicio() {
    // Variáveis para o salário e as contas
		real salario, moradia, agua, luz, internet, gasolina, streamings, telefone, outros
		real total_contas, sobra

		escreva("=== 💸 CALCULADORA FINANCEIRA DO MANO JUCA 💸 ===\n")
		escreva("Olá, Mano Juca! Vamos cuidar desse seu tesouro?\n\n")

		// Entrada de dados
		escreva("Primeiro, qual o valor do seu salário? R$ ")
		leia(salario)

		escreva("\nAgora, me conte os seus gastos deste mês:\n")
		escreva("Quanto vai para a Moradia? R$ ")
		leia(moradia)
		escreva("Quanto vai para a Água? R$ ")
		leia(agua)
		escreva("Quanto vai para a Luz? R$ ")
		leia(luz)
		escreva("Quanto vai para a Internet? R$ ")
		leia(internet)
		escreva("Quanto vai para a Gasolina? R$ ")
		leia(gasolina)
		escreva("Quanto vai para os Streamings (Netflix, Spotify, etc)? R$ ")
		leia(streamings)
		escreva("Quanto vai para o Telefone? R$ ")
		leia(telefone)
		escreva("E quanto sobrou para Outros gastos? R$ ")
		leia(outros)

		// Cálculos
		total_contas = moradia + agua + luz + internet + gasolina + streamings + telefone + outros
		sobra = salario - total_contas

		// Exibição do resultado com carinho
		escreva("\n-------------------------------------------------")
		escreva("\n✨ RESULTADO DO SEU MÊS, MANO JUCA ✨")
		escreva("\n-------------------------------------------------")
		
		se (sobra > 0)
		{
			escreva("\nBoa, Mano Juca! Depois de pagar tudo, sobraram: R$ ", sobra)
			escreva("\nEsse valor já pode ir direto para a sua poupança! 🚀")
		}
		senao se (sobra == 0)
		{
			escreva("\nUfa! As contas bateram certinho com o salário.")
			escreva("\nEste mês não sobrou para guardar, mas você não ficou devendo!")
		}
		senao
		{
			escreva("\nEita, Mano Juca... as contas ficaram R$ ", (sobra * -1), " acima do seu salário.")
			escreva("\nHora de dar uma revisada nesses gastos para não entrar no vermelho! ")
		}
		
		escreva("\n-------------------------------------------------\n")
  }
}
