let soma = 0;
let quantidade = 0;
let nota;

while (true) {
  nota = parseFloat(prompt("Digite uma nota (ou -1 para sair):"));
  
  if (nota === -1) {
    break;
  }
  
  soma += nota;
  quantidade++;
}

if (quantidade > 0) {
  let media = soma / quantidade;
  alert("A média das notas é: " + media);
} else {
  alert("Nenhuma nota foi digitada.");
}
