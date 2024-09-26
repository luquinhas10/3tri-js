function encontrarPrimeiroNegativo(numeros) {
    let encontrado = false;
    numeros.forEach(num => {
        if (num < 0) {
            console.log(`O primeiro número negativo é ${num}.`);
            encontrado = true;
        }
    });
    if (!encontrado) {
        console.log("Não há números negativos na lista.");
    }
}
