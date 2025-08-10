class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    depositar(valor: number): string {
        if (valor < 5) {
            return "El valor a depositar debe ser mayor a $5.00";
        }
        this.cantidad += valor;
        return `Se ha depositado correctamente $${valor.toFixed(2)}. Saldo actual: $${this.cantidad.toFixed(2)}`;
    }

    retirar(valor: number): string {
        if (valor <= 5) {
            return "El valor a retirar debe ser mayor a $5.00";
        }
        if (valor > this.cantidad) {
            return "No hay suficiente saldo en la cuenta";
        }
        this.cantidad -= valor;
        return `Ha retirado $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`;
    }

    mostrarDatos(): string {
        return `Nombre: ${this.nombre}\nTipo de cuenta: ${this.tipoCuenta}\nNúmero de cuenta: ${this.numeroCuenta}\nSaldo actual: $${this.cantidad.toFixed(2)}`;
    }
}

// Variables
let cuenta: Cuenta | null = null;

// Elementos del DOM
const resultado = document.getElementById("resultado") as HTMLPreElement;

document.getElementById("btnCrear")?.addEventListener("click", () => {
    const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    const cantidad = parseFloat((document.getElementById("cantidad") as HTMLInputElement).value);
    const tipoCuenta = (document.getElementById("tipoCuenta") as HTMLInputElement).value;
    const numeroCuenta = (document.getElementById("numeroCuenta") as HTMLInputElement).value;

    cuenta = new Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta);
    resultado.textContent = "Cuenta creada correctamente.";
});

document.getElementById("btnDepositar")?.addEventListener("click", () => {
    if (!cuenta) {
        resultado.textContent = "Primero cree una cuenta.";
        return;
    }
    const valor = parseFloat((document.getElementById("montoDeposito") as HTMLInputElement).value);
    resultado.textContent = cuenta.depositar(valor);
});

document.getElementById("btnRetirar")?.addEventListener("click", () => {
    if (!cuenta) {
        resultado.textContent = "Primero cree una cuenta.";
        return;
    }
    const valor = parseFloat((document.getElementById("montoRetiro") as HTMLInputElement).value);
    resultado.textContent = cuenta.retirar(valor);
});

document.getElementById("btnMostrar")?.addEventListener("click", () => {
    if (!cuenta) {
        resultado.textContent = "Primero cree una cuenta.";
        return;
    }
    resultado.textContent = cuenta.mostrarDatos();
});
