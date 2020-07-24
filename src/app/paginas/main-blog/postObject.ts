export class PostObject{
    public titulo: string;
    public autor: string;
    public keywords: string;
    public contenido: string;
    public content: string;
    public fecha: string;
    public src: string;

    constructor(){
        this.titulo = "Prueba"
    }

    defineAttributes(postObject: object){
        this.titulo = postObject['titulo']
        this.autor = postObject['autor']
        this.keywords = postObject['keywords']
        this.contenido = postObject['contenido']
        this.content = postObject['content']
        this.fecha = postObject['fecha']
        this.src = postObject['src']
    }

    


}