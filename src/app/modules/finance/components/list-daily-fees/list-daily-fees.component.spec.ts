import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDailyFeesComponent } from './list-daily-fees.component';

describe('ListDailyFeesComponent', () => {
  let component: ListDailyFeesComponent;
  let fixture: ComponentFixture<ListDailyFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDailyFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDailyFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
