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
    let y = await this.http.get(HTTPService.url2 + "usuario/" + autorid, HTTPService.httpOptionsMisc)
            .then((value)=>{
                  if(value["autor"] != undefined)
                    authorName = value["autor"]
             })
    return authorName
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
