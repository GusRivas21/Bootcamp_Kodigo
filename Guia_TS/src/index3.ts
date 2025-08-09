import { Cancion } from "./Cancion.js";

const inputTitulo = document.getElementById("titulo") as HTMLInputElement;
const inputGenero = document.getElementById("genero") as HTMLInputElement;
const inputAutor = document.getElementById("autor") as HTMLInputElement;
const btnMostrar = document.getElementById("btnMostrar")!;
const resultado = document.getElementById("resultado")!;

btnMostrar.addEventListener("click", () => {
    const cancion = new Cancion(inputTitulo.value, inputGenero.value);
    cancion.autor = inputAutor.value;

    resultado.textContent = cancion.mostrarDatos();
});
