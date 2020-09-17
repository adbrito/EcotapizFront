import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteNoticiaComponent } from './reporte-noticia.component';

describe('ReporteNoticiaComponent', () => {
  let component: ReporteNoticiaComponent;
  let fixture: ComponentFixture<ReporteNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
