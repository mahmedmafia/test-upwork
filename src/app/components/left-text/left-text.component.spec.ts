import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTextComponent } from './left-text.component';

describe('LeftTextComponent', () => {
  let component: LeftTextComponent;
  let fixture: ComponentFixture<LeftTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
