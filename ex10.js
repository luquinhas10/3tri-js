function filtrarPares(array) {
    return array.filter(num => num % 2 === 0);
}

const numeros = [1, 2, 3, 4, 5, 6];
console.log(filtrarPares(numeros));