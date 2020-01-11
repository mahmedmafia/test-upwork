import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFirstComponent } from './text-first.component';

describe('TextFirstComponent', () => {
  let component: TextFirstComponent;
  let fixture: ComponentFixture<TextFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
