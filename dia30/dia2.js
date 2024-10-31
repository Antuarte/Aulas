console.log(`2- Programar para que o usuário digite 5 números e caso sejam pares, mostre a
média deles. Se algum número digitado não for par, ao final não será mostrada
a média e sim uma mensagem “Um dos números digitados era ímpar”.
`)
soma = 0
for (i = 0; i < 5; i++){

    let num = parseInt (prompt("Digite 5 números"))
    soma += num
    media = soma / 5
}

if (soma % 2 != 0){
    alert("Um dos números digitados era ímpar.")
}else{
    alert("A média dos cinco números digitados é: " + media)
}