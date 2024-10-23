function ehPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }

    return true;
}

// Função para verificar se um número é primo
function ehPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }

    return true;
}

// Solicita um número ao usuário e informa se é primo
let numero = parseInt(prompt("Digite um número:"));
if (ehPrimo(numero)) {
    alert(numero + " é um número primo.");
} else {
    alert(numero + " não é um número primo.");
}

// Solicita cinco números inteiros e informa se são primos
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite um número inteiro:"));
    if (ehPrimo(numero)) {
        alert(numero + " é um número primo.");
    } else {
        alert(numero + " não é um número primo.");
    }
}
