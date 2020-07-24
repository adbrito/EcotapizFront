import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBuscadorComponent } from './sidebar-buscador.component';

describe('SidebarBuscadorComponent', () => {
  let component: SidebarBuscadorComponent;
  let fixture: ComponentFixture<SidebarBuscadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarBuscadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
