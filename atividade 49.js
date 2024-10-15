function calcularMedia(array) {
    if (array.length === 0) {
        return 0;
    }
    const soma = array.reduce((acc, curr) => acc + curr, 0);
    return soma / array.length;
}