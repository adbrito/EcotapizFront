import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  static url = 'https://ecotapiz-5ece.restdb.io/rest/';
  static url2 = 'http://192.168.100.2:8000/';

  static httpOptionsRest = {
    headers: new HttpHeaders({ 
      "content-type": "application/json",
      "x-apikey": "5f622ccc5313511c55fc974d",
      "cache-control": "no-cache"
    })
  };

  static httpOptionsMisc = {
    headers: new HttpHeaders({ 
      "content-type": "application/json"
      /*
      "x-apikey": "5f622ccc5313511c55fc974d",
      "cache-control": "no-cache"
      */
    })
  };

  constructor(public http: HttpClient) { }

  public get(url : string, httpOptions: any){
    const promise = new Promise((resolve, reject) => {
      this.http
        .get(url,httpOptions)
        .toPromise()
        .then((res: any) => {
          // Success
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }

  public post(url : string , data : any, httpOptions: any){
    const promise = new Promise((resolve, reject) => {
      this.http
        .post(url,data,httpOptions)
        .toPromise()
        .then((res: any) => {
          // Success
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }

  public put(url : string , data : any, httpOptions: any){
    const promise = new Promise((resolve, reject) => {
      this.http
        .put(url,data,httpOptions)
        .toPromise()
        .then((res: any) => {
          // Success
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }

  
  public delete(url : string,data:any, httpOptions: any){
    const promise = new Promise((resolve, reject) => {
      this.http
        .delete(url,httpOptions)
        .toPromise()
        .then((res: any) => {
          // Success
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }
}
