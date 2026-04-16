programa {
  funcao inicio() {
    // criar as variaves 
    inteiro tamanhoDoPrompt
    inteiro totalTokens
    real custoPortoken = 0.151, totalReais
    // ler as entradas 
    escreva("Tamanho do prompt: ")
    leia(tamanhoDoPrompt)
    // processar
    totalTokens = tamanhoDoPrompt + 5
     totalReais = totalTokens *  custoPortoken
    // mostras resultado
    escreva("total de Tokens" + totalTokens)
    escreva("\nValor: R$" + totalReais)
  }
}
