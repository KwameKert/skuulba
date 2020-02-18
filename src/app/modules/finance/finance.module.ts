import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceRoutingModule } from './finance-routing.module';
import { GenerateBillComponent } from './components/generate-bill/generate-bill.component';



@NgModule({
  declarations: [GenerateBillComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
