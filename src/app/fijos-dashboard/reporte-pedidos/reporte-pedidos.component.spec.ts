import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePedidosComponent } from './reporte-pedidos.component';

describe('ReportePedidosComponent', () => {
  let component: ReportePedidosComponent;
  let fixture: ComponentFixture<ReportePedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportePedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
