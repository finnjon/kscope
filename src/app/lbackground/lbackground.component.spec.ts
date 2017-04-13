import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LBackgroundComponent } from './lbackground.component';

describe('LBackgroundComponent', () => {
  let component: LBackgroundComponent;
  let fixture: ComponentFixture<LBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
