import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyFeesComponent } from './daily-fees.component';

describe('DailyFeesComponent', () => {
  let component: DailyFeesComponent;
  let fixture: ComponentFixture<DailyFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
