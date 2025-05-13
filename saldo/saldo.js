let salário = parseInt(1200)
let saque = parseFloat(prompt("Quanto você deseja sacar?"))

while(isNaN(saque) || saque<0){ /* enquanto ele digitar uma letra ficara pedindo um valor númerico válido, abaixo de zero, sem nenhuma letra presente */
    alert("Não é possível realizar este saque")
    saque = parseFloat(prompt("Saque um valor válido: "))
  }
  
do {
    saque = parseFloat(prompt("Quanto você deseja sacar?"))
    salário -= saque
    alert(`Você tem R$${salário} restantes na sua conta`)
    
} while (salário > 0 || isNaN(salário))
if (salário <= 0) {
    alert("Você não tem mais dinheiro disponível para saque")
}
