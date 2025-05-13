let compra
let i = 0
let soma = 0

do{
    compra = parseFloat(prompt("Digite o valor do produto: "))

    if( !isNaN(compra) || compra >  0){
        soma += compra
    }
    
}while (compra !== 0)

alert(`O valor total do valor da compra ${soma} `)
