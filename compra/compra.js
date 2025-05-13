let compra = parseInt(prompt("Digite o valor do produto: "))
let i = 0
let soma = 0

while (compra > 0) {
    i++
    soma += compra
    compra = parseInt(prompt("Digite o valor do produto"))
}

if (compra = 0 || i > 0) {  
    alert(`O total do valor da sua compra é R$${soma}`)
}