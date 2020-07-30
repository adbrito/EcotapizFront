export abstract class GenObject{
    public titulo: string = "";
    public keywords: string = "";
    public contenido: string = "";
    public src: string = "";

    constructor(){
        this.titulo = "Prueba"
        this.keywords = ""
        this.contenido = ""
        this.src = ""
    }
    abstract defineAttributes(postObject: object): void;
}