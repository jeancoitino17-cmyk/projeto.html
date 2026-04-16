programa {
  funcao inicio() {
    // informações 
    real valorTotal
    real valorDiaria
    real desconto10
    real desconto15
    real multa = 150
    real valorBruto
    inteiro dias 
    // entradas
    escreva("Quantos dias?")
    leia(dias)
    //processamento
    se(dias <= 5){
       valorDiaria = 100
    }senao se(dias >= 6 <= 10){
      valorDiaria = 90
    }senao{
      valorDiaria = 80
    }
    valorBruto = dias * valorDiaria
    desconto10 =  valorBruto * 0.1
    desconto15 = valorBruto * 0.15
    valorTotal =  valorBruto - desconto10 -desconto15 + multa

    //saidas
    escreva("\n=========================")
    escreva("Valor bruto: R$ " + valorBruto)
    escreva("\n desconto 1 : R$" + desconto10)
    escreva("\n desconto 2 : R$" + desconto15)
    escreva("\n multa R$ " + multa)
    escreva("\n ----------------------------")
    escreva("\n total a pagar: R$ " + valorTotal)
     escreva("\n=========================")



  }
  
}
