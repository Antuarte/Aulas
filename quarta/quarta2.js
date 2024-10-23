console.log(`4- Um número primo é aquele que é divisível apenas por um e por ele mesmo.
Faça um programa que peça ao usuário para digitar um número e informe se ele é primo.
Depois implemente um laço de repetição para solicitar cinco números inteiros e mostre na tela
se são primos ou não.`)

cont = 0

function ehPrimo(num){
    if(num <= 1) return false;

    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return true;
}

while (cont < 5){
    let num = parseInt (prompt("Digite um número."))

if(ehPrimo(num)){
        alert("O número '" + num + "' é primo!")
}else{
    alert("O número '" + num + "' não é primo!")

}
    cont ++
}