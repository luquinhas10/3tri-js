let a = 0, b = 1;
let contador = 0;
while (contador < 10) {
    console.log(a);
    [a, b] = [b, a + b];
    contador++;
}
