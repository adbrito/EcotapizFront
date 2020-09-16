import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrafBarraService {

  baseUrl:string= "http://localhost:8000/";
  constructor(
    private http: HttpClient

  	) { }


getNCotizacion(){
	    return this.http.get(this.baseUrl+'cotizacionMensual/')      

}
}
