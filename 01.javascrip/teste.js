// ====================================================
// informações 
let  vitorias, empates
let pontos
// leitura 
vitorias =  prompt("Vitorias:")
vitorias = Number(vitorias)

empates = Number(prompt("Empates: "))
// processamentos
pontos = vitorias*3 + empates  
// saida
alert("Total  de Pontos:" + pontos)
// ===================================================