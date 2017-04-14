import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationRefComponent } from './motivation-ref.component';

describe('MotivationRefComponent', () => {
  let component: MotivationRefComponent;
  let fixture: ComponentFixture<MotivationRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivationRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
