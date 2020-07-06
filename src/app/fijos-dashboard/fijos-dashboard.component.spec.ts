import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FijosDashboardComponent } from './fijos-dashboard.component';

describe('FijosDashboardComponent', () => {
  let component: FijosDashboardComponent;
  let fixture: ComponentFixture<FijosDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FijosDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FijosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
