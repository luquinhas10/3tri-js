function somaImpares(numeros) {
    let soma = 0;
    numeros.forEach(num => {
        if (num % 2 !== 0) {
            soma += num;
        }
    });
    console.log(`A soma dos números ímpares é ${soma}.`);
}
