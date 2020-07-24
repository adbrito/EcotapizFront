import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCatalogo]'
})
export class CatalogoDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
