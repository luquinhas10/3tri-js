function contarVogais(str) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    for (let char of str) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVogais("exemplo de string")); 