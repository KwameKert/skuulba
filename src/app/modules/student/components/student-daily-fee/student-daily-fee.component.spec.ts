import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDailyFeeComponent } from './student-daily-fee.component';

describe('StudentDailyFeeComponent', () => {
  let component: StudentDailyFeeComponent;
  let fixture: ComponentFixture<StudentDailyFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDailyFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDailyFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
