import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCatalogo3]'
})
export class Catalogo3Directive {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
