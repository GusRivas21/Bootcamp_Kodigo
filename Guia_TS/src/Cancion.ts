export class Cancion {
    public titulo: string;
    public genero: string;
    private _autor: string = "";

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
    }

    get autor(): string {
        return this._autor;
    }

    set autor(nombreAutor: string) {
        this._autor = nombreAutor;
    }

    mostrarDatos(): string {
        return `Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this._autor || "Desconocido"}`;
    }
}
