import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AreaComponent}  from  './index';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieComponent } from './widgets/pie/pie.component';
import {MatTableModule} from '@angular/material/table';
import { ColumnComponent } from './widgets/column/column.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule, MatDividerModule, MatNativeDateModule,MatSelectModule} from '@angular/material';
//import { DialogContentComponent } from '../finance/components/dialog-content/dialog-content.component';

@NgModule({
  declarations: [AreaComponent, PieComponent, ColumnComponent],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatStepperModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [  
    MatDatepickerModule,  
  ],
  exports: [
    AreaComponent,
    PieComponent,
    ColumnComponent,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatStepperModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class SharedModule { }
