import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MiscellanousHttpRequestService {

  constructor(public http: HTTPService) { }

  async getAuthorName(autorid: number){
    let authorName = ""
    let y = await this.http.get(HTTPService.url2 + "user/" + autorid, HTTPService.httpOptionsMisc)
            .then((value)=>{
                  if(value["autor"] != undefined)
                    authorName = value["autor"]
             })
    return authorName
  }

  async getMaterialName(materialid: number){
    let material = ""
    let y = await this.http.get(HTTPService.url2 + "material/" + materialid, HTTPService.httpOptionsMisc)
            .then((value)=>{
                  if(value["material"] != undefined)
                    material = value["material"]
             })
    return material

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
