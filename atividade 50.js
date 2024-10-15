function verificarPalindromo(palavra) {
    const palavraNormalizada = palavra.toLowerCase(); // Ignorar maiúsculas/minúsculas
    return palavraNormalizada === palavraNormalizada.split('').reverse().join('');
}
