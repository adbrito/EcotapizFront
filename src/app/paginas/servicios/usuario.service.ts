import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';
import { UsuarioHTTPService } from './usuario-http.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public user: UsuarioHTTPService) { }

  async getListUsuario(){
    let usuarios:Array<Usuario> = new Array<Usuario>();
    let results = await this.user.getUsuarios()
    results.forEach((objeto) =>{
      let temp = new Usuario()
      temp.defineAttributes(objeto)
      usuarios.push(temp)
    })
    return usuarios
  }
}
