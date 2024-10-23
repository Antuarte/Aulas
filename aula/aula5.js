console.log (" > CONSUMO DE ENERGIA < ")

const ene = Number (prompt("Insira aqui seu consumo de energia em kWh"))

if (ene >= 301){
alert ("Seu consumo é alto!")
}else if (ene <= 100){
alert("Seu consumo é baixo")
}else{
alert("Seu consumo é médio")
}