console.log(`6- Faça um programa que simule um jogo de adivinhação.
O computador escolherá um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é o número.
O jogador tem um número limitado de 10 tentativas. A cada tentativa,
o programa deve informar se o número digitado é maior ou menor que o número escolhido pelo computador.
No final, o programa deve informar se o jogador ganhou (adivinhou o número)
ou perdeu (esgotou todas as tentativas).`)

    // Gera um número aleatório entre 0 (inclusive) e 1 (exclusive),
    //multiplica por 100 para ajustar o intervalo para 0 a 99.999...
    let numeroSorteado = Math.floor(Math.random() * 100) + 1;

    // Math.floor() arredonda o número para baixo, resultando em um número inteiro entre 0 e 99
    // Adiciona 1 ao resultado arredondado para ajustar o intervalo para 1 a 100
    
    // Exibe o número sorteado no console
    console.log("Número sorteado: " + numeroSorteado);

let acertou = false;

for (let i = 1; i <= 10; i ++){
    alert("Tentativa de número: " + i)

let chute = parseInt (prompt("Tente advinhar o número que pensei, de 1 a 100!"))

if (chute < numeroSorteado){
    alert("Seu número é menor do que o sorteado!")
}else if(chute > numeroSorteado){
    alert("Seu número é maior que o sorteado!")
}else{ alert ("Parabéns! Você acertou! O número sorteado é: " + numeroSorteado)
    break;
}

}
alert("Fim do jogo! O número sorteado era: " + numeroSorteado);
