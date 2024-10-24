function todosElementosPositivos(matriz) {
    for (const linha of matriz) {
        for (const elemento of linha) {
            if (elemento < 0) {
                console.log("Nem todos os números são positivos.");
                return false;
            }
        }
    }
    console.log("Todos os números são positivos.");
    return true;
}