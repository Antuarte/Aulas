console.log (" > DENSIDADE DEMOGRÁFICA < ")

const Popu = Number(prompt("Digite a população total da sua região."))
const AreaM = Number(prompt("Digite a área em metros quadrados."))
let AreaKm = AreaM / 1000000
let Densi = Popu / AreaKm
alert ("A densidade demográfica é de " + Densi + "Km².")

if (Densi >= 101){
    alert("A densidade é alta.")
} else if (Densi <= 24) {
    alert("A densidade é baixa.")
}else {
    alert("A densidade é média")
}