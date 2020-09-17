export class _Material{
    public id: number = 0;
    public nombre: string = "";
    public descripcion: string = "";
    public imagen: string = "";
    public ranking:number = 0;
    public precio: number = 0;
    public link: string = "";

    constructor(){
        this.id = 0
        this.nombre = ""
        this.descripcion = ""
        this.imagen = ""
        this.ranking= 0
        this.precio = 0
        this.link = ""
    }

    defineAttributes(postObject: object){
        this.id = postObject['id']
        this.nombre = postObject['nombre']
        this.descripcion = postObject['descripcion']
        this.imagen = postObject['imagen']
        this.ranking = postObject['ranking']
        this.precio = postObject['precio']
        this.link = "['/catalogo/child',{outlets:{'child': 'main'}}]"
    }

    


}