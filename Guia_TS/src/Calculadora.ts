export class Calculadora {
    // Suma
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Resta
    restar(a: number, b: number): number {
        return a - b;
    }

    // Multiplicación
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // División
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero.");
        }
        return a / b;
    }

    // Potencia
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Factorial
    factorial(n: number): number {
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
