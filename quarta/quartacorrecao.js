// Criar uma repetição que peça o valor de um jogo e realize uma soma acumulada, com limite de 2000
let somaAcumulada = 0;
let quantidadeJogos = 0;

// Criar repetição com limite de soma em 2000
while (somaAcumulada < 2000) {
    // Perguntar o valor
    let valor = Number(prompt("Qual é o valor do jogo?"));
    // Aumentar a soma acumulada
    somaAcumulada = somaAcumulada + valor;
    // Aumentar a quantidade
    quantidadeJogos++;
    // Verificar se passou de 2000
    if (somaAcumulada > 2000) {
        // Se passou de 2000, desconsiderar o último valor
        quantidadeJogos--;
        alert(`Soma finalizada: R$${somaAcumulada - valor}, com ${quantidadeJogos} jogos`);
    } else {
        // Exibir a soma atual
        alert(`Soma atual: R$${somaAcumulada}`);
    }
}
