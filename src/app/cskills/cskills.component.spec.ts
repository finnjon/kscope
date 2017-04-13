import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSkillsComponent } from './cskills.component';

describe('CSkillsComponent', () => {
  let component: CSkillsComponent;
  let fixture: ComponentFixture<CSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
