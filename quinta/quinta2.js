console.log(`Com a popularidade das plataformas de streaming, como Netflix, HBO Max e Amazon Prime,
as séries se tornaram um entretenimento essencial para todos. As séries podem ser classificadas de acordo
com a sua avaliação em estrelas:

Avaliação Baixa: 1 a 2 estrelas
Avaliação Média: 3 a 4 estrelas
Avaliação Alta: 5 estrelas
Sabendo disso, crie um programa que:

Solicite ao usuário a avaliação de sua série favorita em estrelas (número inteiro entre 1 e 5).
Classifique e exiba a avaliação utilizando a estrutura switch/case..
Exiba a mensagem "Avaliação Baixa", "Avaliação Média" ou "Avaliação Alta", dependendo do valor informado.
Informe caso seja informada uma avaliação inválida.
`)

alert("Irei classificar a avaliação fornececida.")
let estrela = parseInt(prompt("Diga quantas estrelas, de 1 a 5, sua série favorita recebeu."))

switch(estrela){
    case 1:
    case 2:
        alert("Avaliação Baixa!")
        break;
    case 3:
    case 4:
        alert("Avaliação Média!")
        break;
    case 5:
        alert("Avaliação Alta!")
        break;
}

alert("Obrigada pela preferência, volte sempre!")