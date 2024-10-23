console.log (" > EXERCÍCIO 5: E-COMMERCE < ")
let frete = Number (12.5)
let v1 = Number(prompt("Digite o valor da sua compra, vamos adicionar o frete.:"))
let plano = (prompt(`Diga se faz parte de algum dos nossos planos
1 - Premium
2 - Gold
3 - Silver
4 - Nenhum`))
switch (plano){
    case "Premium":
        v1 = v1 * 0.8
    alert("O valor atual da sua compra é R$" + v1)
    break

    case "Gold":
        v1 = 15.20 + (v1 * 0.8)
        alert("O valor atual da sua compra é R$" + v1)
    break
    
    case "Silver":
            v1 = 15.20 + (v1 * 0.9)
            alert("O valor atual da sua compra é R$" + v1)
    break
    
    case "Nenhum":
    alert("O valor atual da sua compra é R$" + v1)
}