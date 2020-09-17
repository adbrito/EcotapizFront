import { Injectable } from '@angular/core';
import { HTTPService } from './http.service';
import { MiscellanousHttpRequestService } from './miscellanous-http-request.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialHTTPService {

  constructor(public http: HTTPService, 
    public misc: MiscellanousHttpRequestService) { }

    async getMateriales(){
      let materiales:Array<Object> = new Array<Object>();
      let x = await this.http.get(HTTPService.url2 + "material/", HTTPService.httpOptionsMisc).then((res:any) =>{
        materiales = res as Array<Object>
      })
      return materiales;
    }
}
