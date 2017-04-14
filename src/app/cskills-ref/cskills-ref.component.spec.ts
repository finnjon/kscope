import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSkillsRefComponent } from './cskills-ref.component';

describe('CSkillsRefComponent', () => {
  let component: CSkillsRefComponent;
  let fixture: ComponentFixture<CSkillsRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSkillsRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSkillsRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
