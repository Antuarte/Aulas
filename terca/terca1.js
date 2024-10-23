console.log(`2- Supondo que a população de um país A seja de 80.000 habitantes com uma
taxa anual de crescimento de 3% e que a população de B seja 200.000
habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule
e escreva o número de anos necessários para que a população do país A
ultrapasse ou iguale a população do país B.`)

console.log (`Este exercício se assemelha  a P.A, já que a cada ano, é adicionado
uma pequena porcentagem da população a ela mesma.
Já que a quantia de anos é desconhecida, teremos que testar em 1 ano, 2 anos, etc... até um dar A > B.`)

console.log (`
A = 80.000   -   3% (/ 100 = 0,03)
B = 200.000  -  1.5% (/ 100 = 0,015)

Pt = Pi ⋅ ( 1 + r )^t
`)

console.log (`
Pt: População após t anos.
P1: População inicial.
r: Taxa de crescimento anual (em decimal).
t: Número de anos.`)

alert(`A população A possui 80.000 habitantes com crecimento de 3%.
A população B possui 200.000 habitantes com crecimento de 1.5%.`)
alert(`Em quantos anos A > B será verdade?`)


console.log("O código começou.")
alert("O código começou.")

t = 0
const A = 80000
const B = 200000
let PtA = A
let PtB = B

while (PtA < PtB){

console.log("Cálculo da A")
//PtA = A * ((1 + 0.03)**t)
PtA = A * Math.pow((1 + 0.03), t)

console.log("Cálculo da B")
//PtB = B * ((1 + 0.015)**t)
PtB = B * Math.pow((1 + 0.015), t)

t++
}

if (PtA >= PtB){
    alert("A população A irá se igualar ou superar a população B em " + t + " anos!")
    alert("A população A é de " + PtA.toFixed(2).toLocaleString('pt-BR') + " pessoas e a de B é " + PtB.toFixed(2).toLocaleString('pt-BR') + " após " + t + " anos!")
}