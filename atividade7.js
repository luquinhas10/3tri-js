function multiplicarMatrizes(matrizA, matrizB) {
    if (matrizA[0].length !== matrizB.length) {
        throw new Error("O número de colunas de matrizA deve ser igual ao número de linhas de matrizB.");
    }

    const linhasA = matrizA.length;
    const colunasB = matrizB[0].length;
    const matrizResultado = Array.from({ length: linhasA }, () => Array(colunasB).fill(0));

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < matrizA[0].length; k++) {
                matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return matrizResultado;
}