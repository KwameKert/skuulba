import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentInfoComponent } from './edit-student-info.component';

describe('EditStudentInfoComponent', () => {
  let component: EditStudentInfoComponent;
  let fixture: ComponentFixture<EditStudentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
