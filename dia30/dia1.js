console.log(`
1- Desenvolver um programa no qual o usuário digite o número de multas que
deseja cadastrar E para cada multa deve colocar os pontos perdidos na
carteira de habilitação.
Ao final, mostrar o somatório dos pontos e, caso os
pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão,
exibir “Você está regular”.`)
cont = 1
soma = 0
const multas = parseInt (prompt("Digite o número de multas que quer cadastrar."))

while(cont <= multas){
    pontos = parseFloat(prompt("Digite quantos pontos foram perdidos na carteira de habilitação."))
    soma += pontos
    cont ++
}

if (soma >= 21){
    alert(`A soma dos seus pontos é: ${soma}
    Você está irregular`)
}else{
    alert(`A soma dos seus pontos é: ${soma}
    Você está regular!`)
}