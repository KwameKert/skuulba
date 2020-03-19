import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInvoiceComponent } from './student-invoice.component';

describe('StudentInvoiceComponent', () => {
  let component: StudentInvoiceComponent;
  let fixture: ComponentFixture<StudentInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
