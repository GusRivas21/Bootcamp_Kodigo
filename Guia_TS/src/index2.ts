// src/index2.ts
import { Calculadora } from "./Calculadora.js";

const calc = new Calculadora();

// Obtener elementos del DOM
const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const resultadoP = document.getElementById("resultado") as HTMLParagraphElement;

document.getElementById("btnSumar")?.addEventListener("click", () => {
    const res = calc.sumar(Number(num1Input.value), Number(num2Input.value));
    resultadoP.textContent = `Resultado: ${res}`;
});

document.getElementById("btnRestar")?.addEventListener("click", () => {
    const res = calc.restar(Number(num1Input.value), Number(num2Input.value));
    resultadoP.textContent = `Resultado: ${res}`;
});

document.getElementById("btnMultiplicar")?.addEventListener("click", () => {
    const res = calc.multiplicar(Number(num1Input.value), Number(num2Input.value));
    resultadoP.textContent = `Resultado: ${res}`;
});

document.getElementById("btnDividir")?.addEventListener("click", () => {
    try {
        const res = calc.dividir(Number(num1Input.value), Number(num2Input.value));
        resultadoP.textContent = `Resultado: ${res}`;
    } catch (error: any) {
        resultadoP.textContent = `Error: ${error.message}`;
    }
});

document.getElementById("btnPotencia")?.addEventListener("click", () => {
    const res = calc.potencia(Number(num1Input.value), Number(num2Input.value));
    resultadoP.textContent = `Resultado: ${res}`;
});

document.getElementById("btnFactorial")?.addEventListener("click", () => {
    try {
        const res = calc.factorial(Number(num1Input.value));
        resultadoP.textContent = `Resultado: ${res}`;
    } catch (error: any) {
        resultadoP.textContent = `Error: ${error.message}`;
    }
});
