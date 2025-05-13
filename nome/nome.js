let nome
let sobreNome


do {
    nome = prompt("Digite seu nome: ")
} while (nome == 0 || !(isNaN(nome)))


do {
    sobreNome = prompt("Digite seu sobrenome: ")
} while (sobreNome == 0 || !(isNaN(sobreNome))){


alert(`Seu nome é ${nome} ${sobreNome}`)
}
