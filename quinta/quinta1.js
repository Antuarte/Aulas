console.log(`A prefeitura o contratou para criar um software que irá prever o tempo de viagem de acordo
com o meio de transporte. 

Seu programa deve perguntar ao usuário qual a distância a ser percorrida na viagem e qual o meio de
transporte a ser utilizado:

Opção 1: Carro (100 km/h)
Opção 2: Bicicleta (30 km/h)
Opção 3: Ônibus (80 km/h)
Opção 4: Avião (300 km/h)

Após isso informe o tempo estimado da viagem. Sabendo que o tempo é obtido pela distância dividida
pela velocidade.
`)
alert("Irei calcular o seu tempo de viagem.")
alert(`Suas opções de transporte são as seguintes:
Opção 1: Carro
Opção 2: Bicicleta
Opção 3: Ônibus
Opção 4: Avião`)

let transporte = (prompt("Me diga o meio de transporte que irá usar."))
let distância = Number(prompt("Me informe a distância que deseja percorrer."))
tempo = Number
switch (transporte){
    case 'Carro':
        tempo = distância/100
        alert("O tempo estimado da sua viagem de " + transporte + " é de " + tempo.toFixed(2) + " horas.")
        break;
    case 'Bicicleta':
        tempo = distância/30
        alert("O tempo estimado da sua viagem de " + transporte + " é de " + tempo.toFixed(2) + " horas.")
        break;

    case 'Ônibus':
        tempo = distância/80
        alert("O tempo estimado da sua viagem de " + transporte + " é de " + tempo.toFixed(2) + " horas.")
        break;

    case 'Avião':
        tempo = distância/300
        alert("O tempo estimado da sua viagem de " + transporte + " é de " + tempo.toFixed(2) + " horas.")
        break;

}