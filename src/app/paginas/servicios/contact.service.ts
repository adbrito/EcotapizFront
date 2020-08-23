import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import {Contact} from '../contacto/contact';
import { Observable } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseURL: string = "http://localhost:3000/";


constructor(private http: HttpClient) {
  }


addContacto(contacto:Contact): Observable<any> {
    const headers = {
     'content-type': 'application/json'
// 'Access-Control-Allow-Headers':'Content-Type',

// 'Access-Control-Allow-Origin': '*'
  }  
    const body=JSON.stringify(contacto);
    //console.log("este es lo q envio",contacto.email, headers);
    console.log(body);
     return this.http.post('subscribe/', body,{'headers':headers})
    //return this.http.post('subscribe/', contacto.email,{'headers':headers})
  }


/*
 ServerUrl = 'http://localhost:3000/';
  errorData: {};

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { 
console.log("el servicio");

  }

  contactForm(formdata: Contact) {
    return this.http.post<Contact>(this.ServerUrl + 'contact', formdata, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  
 private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }*/
}