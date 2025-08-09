"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CabeceraPagina {
    titulo = "";
    color = "";
    fuente = "";
    alineacion = "izquierda";
    // 1) método que obtiene (asigna) titulo, color y fuente
    obtenerDatos(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    // 2) método que establece alineación (centrado/derecha/izquierda)
    establecerAlineacion(alineacion) {
        const opciones = ["centrado", "derecha", "izquierda"];
        if (!opciones.includes(alineacion)) {
            throw new Error(`Alineación inválida: ${alineacion}`);
        }
        this.alineacion = alineacion;
    }
    // 3) método que "imprime" las propiedades (console + opcionalmente en un elemento DOM)
    imprimirPropiedades(target) {
        const props = this.obtenerPropiedades();
        console.log("CabeceraPagina:", props);
        if (target) {
            // texto
            target.textContent = this.titulo;
            // estilos básicos aplicados desde las propiedades
            target.style.color = this.color;
            target.style.fontFamily = this.fuente;
            target.style.textAlign = this.mapAlignment(this.alineacion);
        }
    }
    // método adicional para obtener objeto con las propiedades (útil para mostrar en la UI)
    obtenerPropiedades() {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente,
            alineacion: this.alineacion,
        };
    }
    mapAlignment(a) {
        if (a === "centrado")
            return "center";
        if (a === "derecha")
            return "right";
        return "left";
    }
}
/* Código de interacción con la UI */
document.addEventListener("DOMContentLoaded", () => {
    const tituloInput = document.getElementById("titulo");
    const colorInput = document.getElementById("color");
    const fuenteSelect = document.getElementById("fuente");
    const alineacionSelect = document.getElementById("alineacion");
    const aplicarBtn = document.getElementById("aplicar");
    const preview = document.getElementById("preview");
    const props = document.getElementById("props");
    const cabecera = new CabeceraPagina();
    function aplicar() {
        // 1) obtener datos desde inputs
        cabecera.obtenerDatos(tituloInput.value, colorInput.value, fuenteSelect.value);
        cabecera.establecerAlineacion(alineacionSelect.value);
        // 2) renderizar en preview (imprimirPropiedades hace el render si recibe elemento)
        cabecera.imprimirPropiedades(preview);
        // 3) mostrar propiedades en formato JSON en el <pre>
        props.textContent = JSON.stringify(cabecera.obtenerPropiedades(), null, 2);
    }
    // aplicar al inicio
    aplicar();
    // aplicar al hacer clic
    aplicarBtn.addEventListener("click", aplicar);
    // opcional: actualizar en cada cambio (live)
    [tituloInput, colorInput, fuenteSelect, alineacionSelect].forEach((el) => el.addEventListener("input", () => {
        // si quieres actualización en vivo, descomenta la siguiente línea:
        // aplicar();
    }));
});
//# sourceMappingURL=index1.js.map