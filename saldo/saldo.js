let salário = parseInt(1200)
let saque = parseFloat(prompt("Quanto você deseja sacar?"))
  
do {
    saque = parseFloat(prompt("Quanto você deseja sacar?"))
    salário -= saque
    alert(`Você tem R$${salário} restantes na sua conta`)
    
    if(isNaN(saque) || saque <0){ /* enquanto ele digitar uma letra ficara pedindo um valor númerico válido, abaixo de zero, sem nenhuma letra presente */
        alert("Não é possível realizar este saque")
        saque = parseFloat(prompt("Saque um valor válido: "))
      }

} while (salário > 0 || isNaN(salário))

    alert("Você não tem mais dinheiro disponível para saque")

