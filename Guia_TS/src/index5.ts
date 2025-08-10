abstract class Persona {
    constructor(
        public nombre: string,
        public apellido: string,
        public direccion: string,
        public telefono: string,
        public edad: number
    ) {}

    verificarMayorEdad(): string {
        return this.edad >= 18
            ? `${this.nombre} es mayor de edad.`
            : `${this.nombre} es menor de edad.`;
    }

    abstract mostrarDatos(): string;
}

class Empleado extends Persona {
    private sueldo: number = 0;

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): string {
        return `Sueldo: $${this.sueldo}`;
    }

    mostrarDatos(): string {
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
document.getElementById("empleadoForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    const apellido = (document.getElementById("apellido") as HTMLInputElement).value;
    const direccion = (document.getElementById("direccion") as HTMLInputElement).value;
    const telefono = (document.getElementById("telefono") as HTMLInputElement).value;
    const edad = parseInt((document.getElementById("edad") as HTMLInputElement).value);
    const sueldo = parseFloat((document.getElementById("sueldo") as HTMLInputElement).value);

    const empleado = new Empleado(nombre, apellido, direccion, telefono, edad);
    empleado.cargarSueldo(sueldo);

    document.getElementById("resultado")!.innerHTML = empleado.mostrarDatos();
});
