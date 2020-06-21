import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPrevComponent } from './vista-prev.component';

describe('VistaPrevComponent', () => {
  let component: VistaPrevComponent;
  let fixture: ComponentFixture<VistaPrevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPrevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
