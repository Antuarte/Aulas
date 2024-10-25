console.log(`8- Faça um programa que solicite ao usuário para digitar valores numéricos inteiros positivos.
Encerre a entrada de dados quando for digitado um número negativo ou zero.
Calcule a média dos números positivos digitados.`)

cont = 0
let numero
let media
let soma
numero = parseInt (prompt("Digite um número inteiro positivo."))

while(numero > 0){
    cont ++
    numero = parseInt (prompt("Digite um número inteiro positivo."))
    soma += numero
    media === soma/cont

    alert("Até o momento a média da soma dos números positivos inteiros é: " + media)

    if(numero <= 0){
        alert(`Número invalido! Apenas positivos e inteiros!
        A média da soma dos números positivos inteiros é: ${media}`)
        break;
    }
}
