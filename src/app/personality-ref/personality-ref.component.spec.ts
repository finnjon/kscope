import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityRefComponent } from './personality-ref.component';

describe('PersonalityRefComponent', () => {
  let component: PersonalityRefComponent;
  let fixture: ComponentFixture<PersonalityRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalityRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
