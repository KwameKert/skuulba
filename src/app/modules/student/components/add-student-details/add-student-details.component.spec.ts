import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentDetailsComponent } from './add-student-details.component';

describe('AddStudentDetailsComponent', () => {
  let component: AddStudentDetailsComponent;
  let fixture: ComponentFixture<AddStudentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
