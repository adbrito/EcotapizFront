import { GenObject } from './GenObject';

export class PostObject extends GenObject{
    public autor: string;
    public content: string;
    public fecha: string;
    public id_post: string;

    constructor(){
        super();
        this.autor = ""
        this.content = ""
        this.fecha = ""
        this.id_post = ""
    }

    defineAttributes(postObject: object){
        this.titulo = postObject['titulo']
        this.autor = postObject['autor']
        this.keywords = postObject['keywords']
        this.contenido = postObject['contenido']
        this.content = postObject['content']
        this.fecha = postObject['fecha']
        this.src = postObject['src']
        this.id_post = postObject['id_post']
    }

    


}