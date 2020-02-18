import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentDetailsComponent } from './edit-student-details.component';

describe('EditStudentDetailsComponent', () => {
  let component: EditStudentDetailsComponent;
  let fixture: ComponentFixture<EditStudentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
