import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSimuladorComponent } from './nav-simulador.component';

describe('NavSimuladorComponent', () => {
  let component: NavSimuladorComponent;
  let fixture: ComponentFixture<NavSimuladorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSimuladorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSimuladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
