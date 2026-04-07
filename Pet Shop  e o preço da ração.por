programa {
  funcao inicio() {
    // Pet Shop Ron Bernardo e o preço da ração
    // informaçôes / varieaveis
  real precoPorQuilo = 10
  real precoPorGrama = precoPorQuilo / 1000
  real peso
  real precoTotal 
  // ler os dados 
  escreva("Digite o peso (g): ")
  leia(peso)
  // processamentos
  precoTotal = peso * precoPorGrama
  //saidas 
  escreva("Valor a pagar: R$ " + precoTotal)

  }
}
