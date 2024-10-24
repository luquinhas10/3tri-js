function transporMatriz(matriz) {
    return matriz[0].map((_, i) => matriz.map(linha => linha[i]));
}