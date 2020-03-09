import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSchoolFeesComponent } from './list-school-fees.component';

describe('ListSchoolFeesComponent', () => {
  let component: ListSchoolFeesComponent;
  let fixture: ComponentFixture<ListSchoolFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSchoolFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSchoolFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
