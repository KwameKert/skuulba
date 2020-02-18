import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GenerateBillComponent } from './components/generate-bill/generate-bill.component';


const routes: Routes = [
  {path: 'generateBill', component: GenerateBillComponent},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
