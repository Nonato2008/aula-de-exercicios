let nome
let sobreNome

do {
    nome = prompt("Digite seu nome: ")
} while (nome == 0 || !(isNaN(nome))) /* se uma pessoa digitar um número por conta do NOT que é representado por ! o valor será alterado e continuará pedindo para digitar o nome*/

do {
    sobreNome = prompt("Digite seu sobrenome: ")
} while (sobreNome == 0 || !(isNaN(sobreNome))){/* se uma pessoa digitar um número por conta do NOT que é representado por ! o valor será alterado e continuará pedindo para digitar o nome*/

alert(`Seu nome é ${nome} ${sobreNome}`)
}