import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectFeeDialogComponent } from './collect-fee-dialog.component';

describe('CollectFeeDialogComponent', () => {
  let component: CollectFeeDialogComponent;
  let fixture: ComponentFixture<CollectFeeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectFeeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectFeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
