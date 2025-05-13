let compra = parseFloat(prompt("Digite o valor do produto: "))
let i = 0
let soma = 0

if(isNaN(compra)){
    alert("Este valor não é válido")
    compra = parseFloat(prompt("Digite o valor VÁLIDO do produto: "))
}
while (compra > 0) {

    i++
    soma += compra
    compra = parseFloat(prompt("Digite o valor do produto"))
}

if (compra = 0 || i > 0) {  
    alert(`O total do valor da sua compra é R$${soma}`)
}