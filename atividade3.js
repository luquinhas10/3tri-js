function maiorElemento(matriz) {
    let maior = matriz[0][0]; // Começa com o primeiro elemento
    for (const linha of matriz) {
        for (const elemento of linha) {
            if (elemento > maior) {
                maior = elemento;
            }
        }
    }
    return maior;
}