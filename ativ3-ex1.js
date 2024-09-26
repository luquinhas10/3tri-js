function verificarPrimos(numeros) {
    numeros.forEach(num => {
        let ehPrimo = true;
        if (num < 2) ehPrimo = false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) {
            console.log(`${num} é primo.`);
        } else {
            console.log(`${num} não é primo.`);
        }
    });
}
