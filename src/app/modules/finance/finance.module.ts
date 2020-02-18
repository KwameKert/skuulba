import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceRoutingModule } from './finance-routing.module';
import { GenerateBillComponent } from './components/generate-bill/generate-bill.component';
import { SharedModule } from '../shared/shared.module';
import { DailyFeesComponent } from './components/daily-fees/daily-fees.component';



@NgModule({
  declarations: [GenerateBillComponent, DailyFeesComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SharedModule
  ]
})
export class FinanceModule { }
