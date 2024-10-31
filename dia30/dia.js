console.log(`
Crie um programa que peça para o usuário digitar um número via
prompt (lembre-se de transformar a resposta para número).
Em seguida crie uma estrutura de repetição com 'for' para somar os
números inteiros de zero até o número digitado.
Exemplo:
Ao digitar 5, deve-se somar 0+1+2+3`)

console.log(`Prompt para solicitar número`)
const num = Number(prompt("Digite um número."))
soma = 0

alert("Iremos fazer uma contagem até '" + num + "'.")

console.log(`Aqui começa o loop "for"`)

for (i = 0; i <= num; i++){
    alert("Contagem: " + i)
    soma += i
}
alert("A soma dos números decorrentes da contagem é: " + soma)