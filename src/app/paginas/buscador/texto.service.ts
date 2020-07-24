import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextoService {
  
  message:string = ""
  
  private objectSource = new BehaviorSubject("");
  currentObject = this.objectSource.asObservable();

  constructor() { }

  changeString(objectSource: string) {
    this.objectSource.next(objectSource)
  }
}
