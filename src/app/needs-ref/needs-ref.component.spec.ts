import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedsRefComponent } from './needs-ref.component';

describe('NeedsRefComponent', () => {
  let component: NeedsRefComponent;
  let fixture: ComponentFixture<NeedsRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedsRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedsRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
