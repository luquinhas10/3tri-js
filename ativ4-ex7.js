let numero = 5;
let fatorial = 1;
let contador = numero;
while (contador > 0) {
    fatorial *= contador;
    contador--;
}
console.log(`O fatorial de ${numero} é: ${fatorial}`);
