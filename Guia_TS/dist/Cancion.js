export class Cancion {
    constructor(titulo, genero) {
        this._autor = "";
        this.titulo = titulo;
        this.genero = genero;
    }
    get autor() {
        return this._autor;
    }
    set autor(nombreAutor) {
        this._autor = nombreAutor;
    }
    mostrarDatos() {
        return `Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this._autor || "Desconocido"}`;
    }
}
