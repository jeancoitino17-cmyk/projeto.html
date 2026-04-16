programa {
  funcao inicio() {
    inteiro numero_marujos 
    real quantidadeDecomida
   escreva("Quantos marujos tem?")
   leia(numero_marujos)
   escreva("Quantos de comida  tem?")
   leia(quantidadeDecomida)
   se(quantidadeDecomida/numero_marujos >= 1.5){
    escreva("Provisões suficientes. Rumo ao horizonte!")
   }senao{
    escreva("Algo está errado. Posseidom não quer ninguém no mar hoje.")

   }


  }
}
