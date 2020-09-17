export class Usuario{
    public id: number = 0;
    public nombre: string = "";
    public apellido: string = "";
    public correo: string = "";
    public contrasena:string = "";
    public link: string = "";

    constructor(){
        this.id = 0
        this.nombre = ""
        this.apellido = ""
        this.correo = ""
        this.contrasena= ""
        this.link = ""
    }

    defineAttributes(postObject: object){
        this.id = postObject['id']
        this.nombre = postObject['nombre']
        this.apellido = postObject['apellido']
        this.correo = postObject['correo']
        this.contrasena = postObject['contrasena']
        this.link = "['/catalogo/child',{outlets:{'child': 'main'}}]"
    }

    


}