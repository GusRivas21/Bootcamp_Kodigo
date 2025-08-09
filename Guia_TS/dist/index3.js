import { Cancion } from "./Cancion.js";
const inputTitulo = document.getElementById("titulo");
const inputGenero = document.getElementById("genero");
const inputAutor = document.getElementById("autor");
const btnMostrar = document.getElementById("btnMostrar");
const resultado = document.getElementById("resultado");
btnMostrar.addEventListener("click", () => {
    const cancion = new Cancion(inputTitulo.value, inputGenero.value);
    cancion.autor = inputAutor.value;
    resultado.textContent = cancion.mostrarDatos();
});
