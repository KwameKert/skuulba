import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ DashboardComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
  ]
})
export class StudentModule { }
