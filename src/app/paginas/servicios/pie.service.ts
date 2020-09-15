import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PieService {
baseUrl:string= "http://localhost:8000/";
  constructor(
    private http: HttpClient

  	) { }


getCotizacion(){
	    return this.http.get(this.baseUrl+'queryCotizacion/')      

}
}