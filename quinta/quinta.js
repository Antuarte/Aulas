console.log(`Você foi contratado para desenvolver um programa para cobrança de entradas de cinema,
no qual deve ser perguntado a quantidade de ingressos e informar o preço final a ser pago.
A administradora do cinema disponibiliza um clube de descontos que oferece um desconto de
R$5,00 no preço dos ingressos.

Sabendo que o ingresso custa R$30,00 sem descontos, crie um programa que pergunte a quantidade
de ingressos para o usuário e também se ele participa do clube de descontos,
após isso informe o preço finala ser pago.
`)

alert("Bem Vindo ao Cinema!")

const quantIng = parseInt (prompt("Insira a quantidade de ingressos desejada."))
let resposta =  (prompt("Você faz parte do nosso clube de descontos?"))
let total = parseInt


switch(resposta){
    case 'Sim':
    total = quantIng * 25
    alert("Você ganhou um desconto de R$5,00 em cada ingresso!")
    alert("O valor final da sua compra para " + quantIng + " ingressos é de R$" + total + ",00")
    break;

    case 'Não':
        total = quantIng * 30
        alert("O valor final da sua compra para " + quantIng + " ingressos é de R$" + total + ",00")
        break;
}