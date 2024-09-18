function verificarVogal(char) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    if (vogais.includes(char.toLowerCase())) {
        console.log("O caractere é uma vogal.");
    } else {
        console.log("O caractere não é uma vogal.");
    }
}
