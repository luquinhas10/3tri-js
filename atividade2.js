function somaTotalMatriz(matriz) {
    let soma = 0;
    for (const linha of matriz) {
        for (const elemento of linha) {
            soma += elemento;
        }
    }
    return soma;
}