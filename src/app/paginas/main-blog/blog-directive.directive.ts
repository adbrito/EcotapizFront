import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBlogDirective]'
})
export class BlogDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
