function contarOcorrencias(numeros, valor) {
    let contador = 0;
    numeros.forEach(num => {
        if (num === valor) {
            contador++;
        }
    });
    console.log(`O valor ${valor} apareceu ${contador} vezes.`);
}
