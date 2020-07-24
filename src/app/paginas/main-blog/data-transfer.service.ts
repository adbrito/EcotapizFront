import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PostObject } from './postObject';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private objectSource = new BehaviorSubject(new PostObject);
  currentObject = this.objectSource.asObservable();

  constructor() { }

  changeObject(objectSource: PostObject) {
    this.objectSource.next(objectSource)
    //this.objectSource.next(Object.assign(this.objectSource.value, {titulo: objectSource.titulo}))
  }
}
