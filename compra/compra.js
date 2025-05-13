let compra = parseFloat(prompt("Digite o valor do produto: "))
let i = 0
let soma = 0

if (compra < 0) { /* enquanto ele digitar um númro abaixo de zero, sem nenhuma letra presente */
    alert("Este valor não é válido")
    compra = parseFloat(prompt("Digite o valor VÁLIDO do produto: "))
}
while (compra > 0) {

    i++
    soma += compra
    compra = parseFloat(prompt("Digite o valor do produto"))

    if (isNaN(compra) || compra < 0) { /* repetirá no loop enquanto escrever uma letra ou valor menor que zero*/
        alert("Este valor não é válido")
        compra = parseFloat(prompt("Digite o valor VÁLIDO do produto: "))
    }
}

if (compra = 0 || i > 0) {  /* A expressão (i > 0) serve para limitar  o usuário digitar algum valor de compra, enquanto ele não digitar uma nota não aparecerá o total */
    alert(`O total do valor da sua compra é R$${soma}`)
}