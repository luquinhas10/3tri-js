function contarPares(numeros) {
    let contador = 0;
    numeros.forEach(num => {
        if (num % 2 === 0) {
            contador++;
        }
    });
    if (contador > 0) {
        console.log(`Existem ${contador} números pares.`);
    } else {
        console.log("Não há números pares.");
    }
}
