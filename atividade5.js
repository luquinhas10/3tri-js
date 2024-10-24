function somaLinhas(matriz) {
    return matriz.map(linha => linha.reduce((soma, elemento) => soma + elemento, 0));
}