import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaNosotrosComponent } from './acerca-nosotros.component';

describe('AcercaNosotrosComponent', () => {
  let component: AcercaNosotrosComponent;
  let fixture: ComponentFixture<AcercaNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
