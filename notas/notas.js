let notas = parseInt(prompt("Digite sua nota"))
let media = 0
let i = 0
let soma = 0

while (notas >= 0) {
    i++
    soma += notas
    notas = parseInt(prompt("Digite sua nota"))

    if(isNaN(notas) ||  notas <0 || notas > 10){
      alert("Nota Inválida")
    }
}

if (notas < 0 || i> 0) {
    media = soma / i
    alert(`A média de suas notas é ${media}`)
}