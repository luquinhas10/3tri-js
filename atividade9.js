function somaDiagonalSecundaria(matriz) {
    let soma = 0;
    const n = matriz.length;
    for (let i = 0; i < n; i++) {
        soma += matriz[i][n - 1 - i];
    }
    return soma;
}
