// Crie um programa para calcular a média entre as notas digitadas:

let nota = 0
let soma = 0
let repet = 0

while (true){
    nota = Number(prompt("Diga o valor de uma nota."))
    if (nota === -1){
        break
    }
    soma += nota
    repet ++
}
if (repet > 0){
    media = soma / repet
    alert ("A média das notas inseridas é: " + media)
} else {
    alert("Nenhuma nota foi digitada.")
}
alert ("Programa encerrado!")