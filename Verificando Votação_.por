programa {
  funcao inicio() {
    inteiro idade

		escreva("Digite sua idade: ")
		leia(idade)

		se (idade >= 16) {
			escreva("Você já é elegível para votar! 🗳️")
		} senao {
			escreva("Ainda não pode votar. Falta(m) ", 16 - idade, " ano(s).")
		}
  }
}
