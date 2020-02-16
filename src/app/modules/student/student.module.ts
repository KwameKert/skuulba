import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddStudentComponent } from './components/add-student/add-student.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [ DashboardComponent, AddStudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    MatInputModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class StudentModule { }
