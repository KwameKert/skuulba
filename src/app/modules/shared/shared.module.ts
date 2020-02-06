import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AreaComponent}  from  './index';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieComponent } from './widgets/pie/pie.component';


@NgModule({
  declarations: [AreaComponent, PieComponent],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [
    AreaComponent
  ]
})
export class SharedModule { }
