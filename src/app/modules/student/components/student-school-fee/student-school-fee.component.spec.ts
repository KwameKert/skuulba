import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSchoolFeeComponent } from './student-school-fee.component';

describe('StudentSchoolFeeComponent', () => {
  let component: StudentSchoolFeeComponent;
  let fixture: ComponentFixture<StudentSchoolFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSchoolFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSchoolFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
