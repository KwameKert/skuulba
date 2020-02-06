import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AreaComponent}  from  './index';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieComponent } from './widgets/pie/pie.component';
import {MatTableModule} from '@angular/material/table';
import { ColumnComponent } from './widgets/column/column.component';


@NgModule({
  declarations: [AreaComponent, PieComponent, ColumnComponent],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatTableModule
  ],
  exports: [
    AreaComponent,
    PieComponent,
    ColumnComponent
  ]
})
export class SharedModule { }
