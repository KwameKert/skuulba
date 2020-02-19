import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GenerateBillComponent } from './components/generate-bill/generate-bill.component';
import { DailyFeesComponent } from './components/daily-fees/daily-fees.component';
import { CollectSchoolFeesComponent } from './components/collect-school-fees/collect-school-fees.component';


const routes: Routes = [
  {path: 'generateBill', component: GenerateBillComponent},
  {path: 'dailyFees', component: DailyFeesComponent},
  {path: 'collectSchoolFee', component: CollectSchoolFeesComponent},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
