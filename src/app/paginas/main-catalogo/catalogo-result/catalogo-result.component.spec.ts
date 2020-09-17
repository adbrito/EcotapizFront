import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoResultComponent } from './catalogo-result.component';

describe('CatalogoResultComponent', () => {
  let component: CatalogoResultComponent;
  let fixture: ComponentFixture<CatalogoResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
