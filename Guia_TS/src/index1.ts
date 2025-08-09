class CabeceraPagina {
    private titulo: string = "";
    private color: string = "";
    private fuente: string = "";
    private alineacion: "centrado" | "derecha" | "izquierda" = "izquierda";

    // 1) método que obtiene titulo, color y fuente
    public obtenerDatos(titulo: string, color: string, fuente: string): void {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    // 2) método que establece alineación
    public establecerAlineacion(
        alineacion: "centrado" | "derecha" | "izquierda"
    ): void {
        const opciones = ["centrado", "derecha", "izquierda"];
        if (!opciones.includes(alineacion)) {
            throw new Error(`Alineación inválida: ${alineacion}`);
        }
        this.alineacion = alineacion;
    }

    // 3) método que "imprime" las propiedades
    public imprimirPropiedades(target?: HTMLElement): void {
        const props = this.obtenerPropiedades();
        console.log("CabeceraPagina:", props);

        if (target) {
            target.textContent = this.titulo;

            target.style.color = this.color;
            target.style.fontFamily = this.fuente;
            target.style.textAlign = this.mapAlignment(this.alineacion);
        }
    }

    // método adicional para obtener objeto con las propiedades
    public obtenerPropiedades() {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente,
            alineacion: this.alineacion,
        };
    }

    private mapAlignment(
        a: "centrado" | "derecha" | "izquierda"
    ): "center" | "right" | "left" {
        if (a === "centrado") return "center";
        if (a === "derecha") return "right";
        return "left";
    }
}

/* Código de interacción con la UI */
document.addEventListener("DOMContentLoaded", () => {
    const tituloInput = document.getElementById("titulo") as HTMLInputElement;
    const colorInput = document.getElementById("color") as HTMLInputElement;
    const fuenteSelect = document.getElementById("fuente") as HTMLSelectElement;
    const alineacionSelect = document.getElementById(
        "alineacion"
    ) as HTMLSelectElement;
    const aplicarBtn = document.getElementById("aplicar") as HTMLButtonElement;
    const preview = document.getElementById("preview") as HTMLElement;
    const props = document.getElementById("props") as HTMLElement;

    const cabecera = new CabeceraPagina();

    function aplicar() {
        // 1) obtener datos desde inputs
        cabecera.obtenerDatos(
            tituloInput.value,
            colorInput.value,
            fuenteSelect.value
        );
        cabecera.establecerAlineacion(
            alineacionSelect.value as "centrado" | "derecha" | "izquierda"
        );

        // 2) renderizar en preview
        cabecera.imprimirPropiedades(preview);

        // 3) mostrar propiedades en formato JSON en el <pre>
        props.textContent = JSON.stringify(cabecera.obtenerPropiedades(), null, 2);
    }

    // aplicar al inicio
    aplicar();

    // aplicar al hacer clic
    aplicarBtn.addEventListener("click", aplicar);
});
