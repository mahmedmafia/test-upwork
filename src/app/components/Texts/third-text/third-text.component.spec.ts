import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTextComponent } from './third-text.component';

describe('ThirdTextComponent', () => {
  let component: ThirdTextComponent;
  let fixture: ComponentFixture<ThirdTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
