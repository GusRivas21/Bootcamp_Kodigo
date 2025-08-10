"use strict";
var _a, _b, _c, _d;
class Cuenta {
    constructor(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    depositar(valor) {
        if (valor < 5) {
            return "El valor a depositar debe ser mayor a $5.00";
        }
        this.cantidad += valor;
        return `Se ha depositado correctamente $${valor.toFixed(2)}. Saldo actual: $${this.cantidad.toFixed(2)}`;
    }
    retirar(valor) {
        if (valor <= 5) {
            return "El valor a retirar debe ser mayor a $5.00";
        }
        if (valor > this.cantidad) {
            return "No hay suficiente saldo en la cuenta";
        }
        this.cantidad -= valor;
        return `Ha retirado $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`;
    }
    mostrarDatos() {
        return `Nombre: ${this.nombre}\nTipo de cuenta: ${this.tipoCuenta}\nNúmero de cuenta: ${this.numeroCuenta}\nSaldo actual: $${this.cantidad.toFixed(2)}`;
    }
}
// Variables
let cuenta = null;
// Elementos del DOM
const resultado = document.getElementById("resultado");
(_a = document.getElementById("btnCrear")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const tipoCuenta = document.getElementById("tipoCuenta").value;
    const numeroCuenta = document.getElementById("numeroCuenta").value;
    cuenta = new Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta);
    resultado.textContent = "Cuenta creada correctamente.";
});
(_b = document.getElementById("btnDepositar")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    if (!cuenta) {
        resultado.textContent = "Primero cree una cuenta.";
        return;
    }
    const valor = parseFloat(document.getElementById("montoDeposito").value);
    resultado.textContent = cuenta.depositar(valor);
});
(_c = document.getElementById("btnRetirar")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    if (!cuenta) {
        resultado.textContent = "Primero cree una cuenta.";
        return;
    }
    const valor = parseFloat(document.getElementById("montoRetiro").value);
    resultado.textContent = cuenta.retirar(valor);
});
(_d = document.getElementById("btnMostrar")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    if (!cuenta) {
        resultado.textContent = "Primero cree una cuenta.";
        return;
    }
    resultado.textContent = cuenta.mostrarDatos();
});
