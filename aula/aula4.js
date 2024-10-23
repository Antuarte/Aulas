console.log (" > JOGO DA PETECA < ")
let pont = 0
let cont = 0
while (cont < 3){
let local = parseInt(prompt(`De acordo com a área do alvo, diga o número onde a peteca caiu:
→ Guia de Área
 5 - Deus da peteca
 4 - Petequeiro profissa
 3 - Petequeiro de final de semana
 2 - Pseudo-petequeiro
 1 - Portugol das petecas`))

 switch (local){
    case 5:
        pont = pont + 15
        alert("A pontuação foi de " + pont + " pontos!")
    break


    case 4:
        pont = pont + 10
        alert("A pontuação foi de " + pont + " pontos!")
    break


    case 3:
        pont = pont + 5
        alert("A pontuação foi de " + pont + " pontos!")
    break


    case 2:
        pont = pont + 2
        alert("A pontuação foi de " + pont + " pontos!")
    break


    case 1:
        pont = pont + 0
        alert("A pontuação foi de " + pont + " pontos!")
    break
 }
 cont ++
}