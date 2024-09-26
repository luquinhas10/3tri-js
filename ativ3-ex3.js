function encontrarNumeroEspecifico(numeros, numeroBuscado) {
    let encontrado = false;
    numeros.forEach(num => {
        if (num === numeroBuscado) {
            console.log(`${numeroBuscado} foi encontrado.`);
            encontrado = true;
        }
    });
    if (!encontrado) {
        console.log(`${numeroBuscado} não está no array.`);
    }
}
