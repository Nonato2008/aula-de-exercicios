const numSecreto = Math.floor(Math.random() * 100) + 1;

let numTentativa = 0;

let i = 0;

while (numTentativa !== numSecreto) {

    i++;

    do{

        numTentativa = parseInt(prompt(`${i}º tentativa. Tente adivinhar um número entre 1 e 100`));

    } while (isNaN(numTentativa || numTentativa < 1 || numTentativa > 100));
        

    if (numTentativa < numSecreto) {
        alert(`O número que você digitou é MENOR que o número secreto!`);

    } else if (numTentativa > numSecreto) {

        alert(`O número que você digitou é MAIOR que o número secreto!`);
    }
}

alert(`Parabéns! O número secreto era ${numSecreto}. Você acertou em ${i} tentativas`);