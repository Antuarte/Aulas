console.log(`7- Em uma competição de saltos ornamentais, 5 (cinco) juízes informam notas reais variando
de 0 a 10. A nota final do atleta deve excluir a maior e a menor nota dos juízes e é composta pela soma
das três demais notas. Faça um programa que lê do usuário as cinco notas dos juízes e informa a nota
final do atleta (a soma das notas excluindo a menor e a maior delas). Utilize uma estrutura de repetição.`)

while (cont < 5){
    cont = 0
    cont ++
    nota = 0
let nota = Number(prompt("Diga a " + cont + "° nota dos juízes."))

nota += nota
maiorNota = 0
menorNota = Infinity

if (nota > maiorNota){
    maiorNota = nota
}

if (nota < menorNota){
    menorNota = nota
}

}

notaFinal = nota - menorNota - maiorNota
notaFinal = notaFinal/3
alert("A nota final da competição é: " + notaFinal)