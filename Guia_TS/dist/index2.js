var _a, _b, _c, _d, _e, _f;
// src/index2.ts
import { Calculadora } from "./Calculadora.js";
const calc = new Calculadora();
// Obtener elementos del DOM
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultadoP = document.getElementById("resultado");
(_a = document.getElementById("btnSumar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const res = calc.sumar(Number(num1Input.value), Number(num2Input.value));
    resultadoP.textContent = `Resultado: ${res}`;
});
(_b = document.getElementById("btnRestar")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    const res = calc.restar(Number(num1Input.value), Number(num2Input.value));
    resultadoP.textContent = `Resultado: ${res}`;
});
(_c = document.getElementById("btnMultiplicar")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    const res = calc.multiplicar(Number(num1Input.value), Number(num2Input.value));
    resultadoP.textContent = `Resultado: ${res}`;
});
(_d = document.getElementById("btnDividir")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    try {
        const res = calc.dividir(Number(num1Input.value), Number(num2Input.value));
        resultadoP.textContent = `Resultado: ${res}`;
    }
    catch (error) {
        resultadoP.textContent = `Error: ${error.message}`;
    }
});
(_e = document.getElementById("btnPotencia")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
    const res = calc.potencia(Number(num1Input.value), Number(num2Input.value));
    resultadoP.textContent = `Resultado: ${res}`;
});
(_f = document.getElementById("btnFactorial")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => {
    try {
        const res = calc.factorial(Number(num1Input.value));
        resultadoP.textContent = `Resultado: ${res}`;
    }
    catch (error) {
        resultadoP.textContent = `Error: ${error.message}`;
    }
});
