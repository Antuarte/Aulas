console.log (" > EXERCÍCIO 4: PASSA A GRANA < ")
let Saldo = 500
alert("Conta Bancária Itaú")

let conta = parseInt(prompt("Digite o número da sua conta bancária"))

if (conta!= 27054){
alert("Conta bancária desconhecida.")}
console.log("AMARELO")
if(conta == 27054){
    let desejo = parseInt(prompt(`Olá Aline! Digite o número correspondente ao seu desejo.
    1 - Saldo
    2 - Depósito
    3 - Saque`))

    console.log("ROSA")

    switch (desejo){
        case 1:
        alert("Seu saldo é de R$" + Saldo)
        break

        case 2:
        let Depósito = Number (prompt(`
        Seu saldo é de R$ ${Saldo}.
        Quanto gostaria de depositar?`))
        Saldo = Saldo + Depósito
        alert("Seu saldo atual é de R$" + Saldo)
        break

        case 3:
            let Saque = Number (prompt(`
            Seu saldo é de R$ ${Saldo}.
            Quanto gostaria de sacar?`))
            Saldo = Saldo - Saque
            if (Saldo >= 0){
            alert("Seu saldo atual é de R$" + Saldo)}else{
                alert("Você tentou efetuar um saque maior que seu saldo!")
            }


            console.log("ROSA")
        }
        console.log("AMARELO")
        }