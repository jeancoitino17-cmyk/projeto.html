programa
{
	funcao inicio()
	{
		// Declaração de variáveis
		real peso, altura, imc

		escreva("--- CALCULADORA DE IMC ---\n")

		escreva("Digite seu peso (em kg): ")
		leia(peso)

		escreva("Digite sua altura (em metros, ex: 1.75): ")
		leia(altura)

		// Cálculo do IMC: peso dividido por (altura vezes altura)
		imc = peso / (altura * altura)

		escreva("\nSeu IMC é: ", imc)

		// Verificação da faixa de 25
		se (imc < 25) 
		{
			escreva("\nResultado: Seu IMC está abaixo de 25.")
		}
		senao 
		{
			escreva("\nResultado: Seu IMC é 25 ou superior.")
		}

		escreva("\n--------------------------\n")
	}
}