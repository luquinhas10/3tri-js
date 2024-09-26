function verificarTodosPositivos(numeros) {
    let todosPositivos = true;
    numeros.forEach(num => {
        if (num < 0) {
            todosPositivos = false;
        }
    });
    if (todosPositivos) {
        console.log("Todos os números são positivos.");
    } else {
        console.log("Há um número negativo.");
    }
}
