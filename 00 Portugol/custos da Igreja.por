programa {
  funcao inicio() {


		
		inteiro relPF = 40
		inteiro relPJ = 33
		real tempoPF = 12.0
		real tempoPJ = 42.0
		real valorPF = 2350.0
		real valorPJ = 8900.0

		
		inteiro totalRelatorios = relPF + relPJ
		real tempoTotal = tempoPF + tempoPJ
		real valorTotal = valorPF + valorPJ

		
		real mediaValorPF = valorPF / relPF
		real mediaValorPJ = valorPJ / relPJ
		real mediaTempoPF_Min = (tempoPF * 60) / relPF 
		real mediaTempoPJ_Min = (tempoPJ * 60) / relPJ 

		
		escreva("==================================================\n")
		escreva("          RELATÓRIO DOS RELATÓRIOS - MENSAL       \n")
		escreva("==================================================\n")
		escreva("\n[DADOS GERAIS]\n")
		escreva("--------------------------------------------------\n")
		escreva("Total de Relatórios:      ", totalRelatorios, " unidades\n")
		escreva("Tempo Total Investido:    ", tempoTotal, " horas\n")
		escreva("Faturamento Total:        R$ ", valorTotal, "\n")
		
		escreva("\n[DETALHAMENTO POR CATEGORIA]\n")
		escreva("--------------------------------------------------\n")
		escreva("PESSOA FÍSICA (PF):\n")
		escreva("  - Quantidade:           ", relPF, "\n")
		escreva("  - Valor Médio/Relat.:   R$ ", mediaValorPF, "\n")
		escreva("  - Tempo Médio/Relat.:   ", mediaTempoPF_Min, " minutos\n")
		
		escreva("\nPESSOA JURÍDICA (PJ):\n")
		escreva("  - Quantidade:           ", relPJ, "\n")
		escreva("  - Valor Médio/Relat.:   R$ ", mediaValorPJ, "\n")
		escreva("  - Tempo Médio/Relat.:   ", mediaTempoPJ_Min, " minutos\n")
		
		escreva("\n[ANÁLISE DE EFICIÊNCIA]\n")
		escreva("--------------------------------------------------\n")
		escreva("Valor médio por hora:     R$ ", valorTotal / tempoTotal, "\n")
		escreva("==================================================\n")
		escreva("          Kowalski, análise concluída!            \n")
		escreva("==================================================\n")
  }
}
