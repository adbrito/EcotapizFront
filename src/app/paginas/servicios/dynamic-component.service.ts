import { Injectable, ComponentFactoryResolver, ViewContainerRef, Inject, Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  private _factoryResolver: ComponentFactoryResolver;
  private _rootViewContainer: ViewContainerRef;
  private _dynamicComponents: any = {};

  set rootViewContainer(viewContainerRef) {
    this._rootViewContainer = viewContainerRef;
  }

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this._factoryResolver = factoryResolver;
  }

  insertComponent(component: any, into?: ViewContainerRef): Component {
    const rootViewContainer = into || this._rootViewContainer;
    const factory = this._factoryResolver.resolveComponentFactory(component);
    const compId = `dyn-comp-${Math.floor(Math.random() * 10 ** 7) + 10 ** 6}`;
    const componentRef = rootViewContainer.createComponent(factory)
    componentRef.location.nativeElement.id = compId;

    //rootViewContainer.insert(componentRef.hostView);
    this._dynamicComponents[compId] = componentRef; // used to delete;

    return componentRef.instance;
  }

  deleteComponent(compId: string): void {
    this._dynamicComponents[compId].destroy();
    delete this._dynamicComponents[compId];
  }

  
}
