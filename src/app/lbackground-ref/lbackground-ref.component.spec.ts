import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LBackgroundRefComponent } from './lbackground-ref.component';

describe('LBackgroundRefComponent', () => {
  let component: LBackgroundRefComponent;
  let fixture: ComponentFixture<LBackgroundRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LBackgroundRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LBackgroundRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
