import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCatalogoComponent } from './main-catalogo.component';

describe('MainCatalogoComponent', () => {
  let component: MainCatalogoComponent;
  let fixture: ComponentFixture<MainCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
