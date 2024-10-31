console.log(`3- Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50.
Ao final deve mostrar o maior número digitado e o menor número digitado. Os
números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.`)


cont = 1

maiorNum = 0
menorNum = Infinity

while (cont <= 10){
let num = parseInt(prompt("Digite um número (" + cont + "°)"));
cont ++
if(num >= 0 && num <= 50){

if(num > maiorNum){
    maiorNum = num;
}
if(num < menorNum){
    menorNum = num;
}

}

}

alert(`O maior número digitado é: ${maiorNum}
O menor número digitado é: ${menorNum}`);