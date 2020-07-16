export class itemObject{
    public titulo: string;
    public keywords: string;
    public contenido: string;
    public precio: string;
    public calificacion: string;
    public src: string;

    constructor(){
        this.titulo = "Prueba"
    }

    defineAttributes(postObject: object){
        this.titulo = postObject['titulo']
        this.keywords = postObject['keywords']
        this.contenido = postObject['contenido']
        this.precio = postObject['precio']
        this.calificacion = postObject['calificacion']
        this.src = postObject['src']
    }

    


}