function verificarPalindromo(str) {
    const strReversa = str.split('').reverse().join('');
    if (str === strReversa) {
        console.log("É um palíndromo");
    } else {
        console.log("Não é um palíndromo");
    }
}

verificarPalindromo("arara");
verificarPalindromo("javascript");