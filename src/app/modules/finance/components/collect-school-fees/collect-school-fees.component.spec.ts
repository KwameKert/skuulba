import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectSchoolFeesComponent } from './collect-school-fees.component';

describe('CollectSchoolFeesComponent', () => {
  let component: CollectSchoolFeesComponent;
  let fixture: ComponentFixture<CollectSchoolFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectSchoolFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectSchoolFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
