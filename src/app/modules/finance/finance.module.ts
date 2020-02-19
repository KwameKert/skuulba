import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceRoutingModule } from './finance-routing.module';
import { GenerateBillComponent } from './components/generate-bill/generate-bill.component';
import { SharedModule } from '../shared/shared.module';
import { DailyFeesComponent } from './components/daily-fees/daily-fees.component';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { CollectSchoolFeesComponent } from './components/collect-school-fees/collect-school-fees.component';
import { CollectFeeDialogComponent } from './components/collect-fee-dialog/collect-fee-dialog.component';



@NgModule({
  declarations: [GenerateBillComponent, DailyFeesComponent, DialogContentComponent, CollectSchoolFeesComponent, CollectFeeDialogComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SharedModule
  ],
  entryComponents: [
    CollectFeeDialogComponent
  ]
})
export class FinanceModule { }
