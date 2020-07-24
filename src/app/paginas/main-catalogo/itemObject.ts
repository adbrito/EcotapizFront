export class ItemObject{
    public titulo: string = "";
    public keywords: string = "";
    public contenido: string = "";
    public precio: string = "";
    public calificacion: string = "";
    public src: string = "";
    public link: string = "";

    constructor(){
        this.titulo = "Prueba"
        this.keywords = ""
        this.contenido = ""
        this.precio = ""
        this.calificacion = ""
        this.src = ""
        this.link= ""
    }

    defineAttributes(postObject: object){
        this.titulo = postObject['titulo']
        this.keywords = postObject['keywords']
        this.contenido = postObject['contenido']
        this.precio = postObject['precio']
        this.calificacion = postObject['calificacion']
        this.src = postObject['src']
        this.link = "['/catalogo/child',{outlets:{'child': 'main'}}]"
    }

    


}