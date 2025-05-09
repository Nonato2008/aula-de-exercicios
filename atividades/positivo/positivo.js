let tentativa = parseInt(prompt("Digite um número positivo."))

while (tentativa < 0 || isNaN(tentativa)){
    alert("Este número não é positivo!")
    prompt ("Digite um número positivo.")
}
alert("Este número é positivo!")