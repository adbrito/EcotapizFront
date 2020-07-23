import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSearcherSelector]'
})
export class SearcherSelectorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
