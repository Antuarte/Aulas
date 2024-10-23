console.log(`3- Você é um colecionador de video games e resolveu ir a uma loja para
comprar alguns jogos raros. Porém, você tem apenas R$2000 para gastar. Faça
um programa que pergunte o nome do jogo e o valor, repetidamente. Caso o
valor ultrapasse R$2000, encerrar (desconsiderando o último jogo).`)

console.log(`Extra: Mostrar na tela o total gasto em reais nos jogos, a quantidade de
jogos, o mais caro e o mais barato`)

maisCaro = 0
maisBarato = Infinity
debito = 0
quantidadeJogos = 0
Valor = 0
while (debito <= 2000){
    
let Jogo = (prompt("Digite o nome do jogo que deseja."))
Valor = Number(prompt("Diga o valor de '" + Jogo + "'."))

if (Valor > maisCaro){
    maisCaro = Valor
}

if (Valor < maisBarato){
    maisBarato = Valor
}


if (debito + Valor > 2000){
    break
}

debito += Valor
quantidadeJogos ++

}

alert("Valor da compra R$" + debito)

alert("Sua compra teve o valor de R$" + debito + ",  com um total de " + quantidadeJogos + " jogos!")

alert("Seu jogo mais caro tem o valor de R$" + maisCaro)
alert("Seu jogo mais barato tem o valor de R$" + maisBarato)