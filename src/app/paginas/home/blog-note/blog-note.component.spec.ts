import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNoteComponent } from './blog-note.component';

describe('BlogNoteComponent', () => {
  let component: BlogNoteComponent;
  let fixture: ComponentFixture<BlogNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
