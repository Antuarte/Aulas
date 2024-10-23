// País A - início é 80.000 e cresce 3% ou 0.03
let populacaoA = 80000;
// País B - início é 200.000 e cresce 1.5% ou 0.015
let populacaoB = 200000;
let anos = 0;

while (populacaoA <= populacaoB) {
    // Aumento de 3% da população A
    populacaoA = populacaoA + (populacaoA * 0.03);
    // Aumento de 1.5% da população B
    populacaoB = populacaoB + (populacaoB * 0.015);
    // Indicar que passou mais um ano
    anos++;
}

alert(`Após ${anos} anos, a população A superou a B`);
