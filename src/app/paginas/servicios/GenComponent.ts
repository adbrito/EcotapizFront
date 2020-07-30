import { GenObject } from './GenObject';
import { Router } from '@angular/router';

export abstract class GenComponent{
    GenPost: GenObject;
    GenData: GenObject;
    link: any[];

    constructor(){
        this.link = [];
    }

    defineAttributes(genObject: object){
        this.GenData.defineAttributes(genObject);
    }

    abstract newObject(): void;


}