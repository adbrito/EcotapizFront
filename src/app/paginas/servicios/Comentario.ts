export class Comentario{
    public autor: string = "";
    public comentario: string = "";
    public link: string = "";

    constructor(){
        this.autor = ""
        this.comentario = ""
        this.link = ""
    }

    defineAttributes(postObject: object){
        this.autor = postObject['autor']
        this.comentario = postObject['comentario']
        this.link = "['/catalogo/child',{outlets:{'child': 'main'}}]"
    }

    


}