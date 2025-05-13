let salário = parseInt(1200)
let saque = 0

do {
    saque = parseFloat(prompt("Quanto você deseja sacar?"))
    salário -= saque
    alert(`Você tem R$${salário} restantes na sua conta`)
    
} while (salário > 0 || isNaN(salário))
if (salário <= 0) {
    alert("Você não tem mais dinheiro disponível para saque")
}
