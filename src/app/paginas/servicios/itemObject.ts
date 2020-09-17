import { GenObject } from './GenObject';

export class ItemObject extends GenObject{
    public precio: string = "";
    public calificacion: string = "";
    public link: string = "";
    public material:string = "";

    constructor(){
        super();
        this.precio = ""
        this.calificacion = ""
        this.src = ""
        this.link= ""
        this.material = ""
    }

    defineAttributes(postObject: object){
        this.titulo = postObject['titulo']
        this.keywords = postObject['keywords']
        this.contenido = postObject['contenido']
        this.precio = postObject['precio']
        this.calificacion = postObject['calificacion']
        this.src = postObject['src']
        this.material = postObject['material']
        this.link = "['/catalogo/child',{outlets:{'child': 'main'}}]"
    }

    


}