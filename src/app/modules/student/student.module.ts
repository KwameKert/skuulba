import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule, MatDividerModule, MatNativeDateModule,MatSelectModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddStudentComponent } from './components/add-student/add-student.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatButtonModule} from '@angular/material/button';
import { AddStudentDetailsComponent } from './components/add-student-details/add-student-details.component';
import {MatTabsModule} from '@angular/material/tabs'
import {MatIconModule} from '@angular/material/icon';
import { SearchStudentComponent } from './components/search-student/search-student.component'
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [ DashboardComponent, AddStudentComponent, AddStudentDetailsComponent, SearchStudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule  
  ],
  providers: [  
    MatDatepickerModule,  
  ],
  exports: [
    DashboardComponent
  ]
})
export class StudentModule { }
