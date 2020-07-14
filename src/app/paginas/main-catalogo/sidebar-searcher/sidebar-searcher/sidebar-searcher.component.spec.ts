import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSearcherComponent } from './sidebar-searcher.component';

describe('SidebarSearcherComponent', () => {
  let component: SidebarSearcherComponent;
  let fixture: ComponentFixture<SidebarSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
