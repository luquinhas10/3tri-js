function calcularFatorial(n) {
    if (n < 0) {
        return "Fatorial não definido para números negativos.";
    }
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}