function matrizSimetrica(matriz) {
    const n = matriz.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matriz[i][j] !== matriz[j][i]) {
                console.log("A matriz não é simétrica.");
                return false;
            }
        }
    }
    console.log("A matriz é simétrica.");
    return true;
}
