import { Injectable } from '@angular/core';
import { HTTPService } from './http.service';
import { MiscellanousHttpRequestService } from './miscellanous-http-request.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioHTTPService {

  constructor(public http: HTTPService, 
    public misc: MiscellanousHttpRequestService) { }

    async getUsuarios(){
      let usuarios:Array<Object> = new Array<Object>();
      let x = await this.http.get(HTTPService.url2 + "users/", HTTPService.httpOptionsMisc).then((res:any) =>{
        usuarios = res as Array<Object>
      })
      return usuarios;
    }
}
