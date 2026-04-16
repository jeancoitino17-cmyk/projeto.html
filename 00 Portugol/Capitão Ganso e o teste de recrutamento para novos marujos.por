programa {
  funcao inicio() {
     logico sabeNadar
		inteiro idade
		logico temRecomendacao

		escreva("O aspirante sabe nadar? (verdadeiro/falso): ")
		leia(sabeNadar)

		escreva("Qual a idade do aspirante? ")
		leia(idade)

		escreva("Possui carta de recomendação? (verdadeiro/falso): ")
		leia(temRecomendacao)

		escreva("\n--- Resultado da Avaliação ---\n")

		se (sabeNadar == verdadeiro e idade > 16) 
		{
			escreva("Aprovado para o navio!")
		}
		senao se (sabeNadar == falso e temRecomendacao == verdadeiro e idade >= 14)
		{
			escreva("Aprovado sob recomendação. Monitorar nas primeiras viagens.")
		}
		senao 
		{
			escreva("Reprovado. Volte quando estiver mais preparado para o mar.")
 
  }
}
}

