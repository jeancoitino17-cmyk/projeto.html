programa {
  funcao inicio() {
    // Variáveis para armazenar os dados do time
		inteiro vitorias, empates, total_pontos
		cadeia nome_time

		escreva("=== SISTEMA DE PONTUAÇÃO DO CAMPEONATO ===\n")
		
		escreva("Digite o nome do time: ")
		leia(nome_time)

		escreva("Número de vitórias: ")
		leia(vitorias)

		escreva("Número de empates: ")
		leia(empates)

		// Cálculo da pontuação (Vitória = 3 pts / Empate = 1 pt)
		total_pontos = (vitorias * 3) + (empates * 1)

		// Exibição do resultado
		escreva("\n----------------------------------------")
		escreva("\nO time ", nome_time, " acumulou ", total_pontos, " pontos.")
		escreva("\n----------------------------------------\n")
  }
}
