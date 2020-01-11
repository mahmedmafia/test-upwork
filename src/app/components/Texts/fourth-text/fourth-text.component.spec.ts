import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthTextComponent } from './fourth-text.component';

describe('FourthTextComponent', () => {
  let component: FourthTextComponent;
  let fixture: ComponentFixture<FourthTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
