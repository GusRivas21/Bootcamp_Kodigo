export class Calculadora {
    // Suma
    sumar(a, b) {
        return a + b;
    }
    // Resta
    restar(a, b) {
        return a - b;
    }
    // Multiplicación
    multiplicar(a, b) {
        return a * b;
    }
    // División
    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero.");
        }
        return a / b;
    }
    // Potencia
    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }
    // Factorial
    factorial(n) {
        if (n < 0) {
            throw new Error("No existe factorial de números negativos.");
        }
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}
