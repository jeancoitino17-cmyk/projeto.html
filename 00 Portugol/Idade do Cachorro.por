programa {
  funcao inicio() {
    inteiro idadeCao, idadeHumana
    
    escreva("Qual a idade do seu doguinho? ")
		leia(idadeCao)

		idadeHumana = idadeCao * 7

		escreva("Seu cachorro tem ", idadeHumana, " anos em anos humanos.\n")

		se (idadeHumana >= 65) {
			escreva("Já pode se aposentar e viver de petiscos! 🦴")
		} senao {
			escreva("Ainda tem muita lenha pra queimar no parque!")
		}
  }
}
