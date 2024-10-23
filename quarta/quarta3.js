console.log(`5- Você está organizando um festival de música e precisa calcular o tempo total de
reprodução de uma lista de músicas. Solicite ao usuário o nome de cada música e a duração em minutos,
repetidamente, até que ele não queira mais adicionar músicas. Em seguida, exiba o tempo total de reprodução
da lista de músicas.
Extra: Exiba a quantidade de horas e minutos separadamente.`)

hora = 0
minutosTotais = 0
let maisMusica = true

while(maisMusica){

    let nome = (prompt("Diga o nome da música que deseja."))
    let minutos = parseInt(prompt("Diga o tempo da música em minutos"))
    maisMusica = confirm("Deseja adicionar uma música?")

    minutosTotais += minutos
}

while(minutosTotais >= 60){
    minutosTotais -= 60
    hora++
}

alert("O tempo total das músicas adiciondas é de " + hora + " horas e " + minutosTotais + " minutos.")