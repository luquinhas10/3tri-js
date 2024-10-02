const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let palpite = 0;

while (palpite !== numeroAleatorio) {
    palpite = parseInt(prompt("Adivinhe um número entre 1 e 10:"), 10);
    if (palpite < numeroAleatorio) {
        console.log("Muito baixo!");
    } else if (palpite > numeroAleatorio) {
        console.log("Muito alto!");
    }
}
console.log("Parabéns! Você acertou o número.");
