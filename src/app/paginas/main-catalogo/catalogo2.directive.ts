import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCatalogo2]'
})
export class Catalogo2Directive {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
