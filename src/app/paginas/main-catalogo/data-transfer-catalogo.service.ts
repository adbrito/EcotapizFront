import { Injectable } from '@angular/core';
import { ItemObject } from './itemObject';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferCatalogoService {

  private objectSource = new BehaviorSubject(new ItemObject);
  currentObject = this.objectSource.asObservable();

  constructor() { }

  changeObject(objectSource: ItemObject) {
    this.objectSource.next(objectSource)
  }
}
