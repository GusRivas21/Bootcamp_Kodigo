"use strict";
var _a;
class Persona {
    constructor(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    verificarMayorEdad() {
        return this.edad >= 18
            ? `${this.nombre} es mayor de edad.`
            : `${this.nombre} es menor de edad.`;
    }
}
class Empleado extends Persona {
    constructor() {
        super(...arguments);
        this.sueldo = 0;
    }
    cargarSueldo(sueldo) {
        this.sueldo = sueldo;
    }
    imprimirSueldo() {
        return `Sueldo: $${this.sueldo}`;
    }
    mostrarDatos() {
        return `
        Nombre: ${this.nombre} ${this.apellido}<br>
        Dirección: ${this.direccion}<br>
        Teléfono: ${this.telefono}<br>
        Edad: ${this.edad} años<br>
        ${this.verificarMayorEdad()}<br>
        ${this.imprimirSueldo()}
        `;
    }
}
// Evento del formulario
(_a = document.getElementById("empleadoForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const edad = parseInt(document.getElementById("edad").value);
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const empleado = new Empleado(nombre, apellido, direccion, telefono, edad);
    empleado.cargarSueldo(sueldo);
    document.getElementById("resultado").innerHTML = empleado.mostrarDatos();
});
