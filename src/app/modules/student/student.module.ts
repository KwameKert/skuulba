import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddStudentDetailsComponent } from './components/add-student-details/add-student-details.component';
import { SearchStudentComponent, } from './components/search-student/search-student.component'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { EditStudentInfoComponent } from './components/edit-student-info/edit-student-info.component';
import { EditStudentDetailsComponent } from './components/edit-student-details/edit-student-details.component';
import { StudentAttendanceComponent } from './components/student-attendance/student-attendance.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';



@NgModule({
  declarations: [ DashboardComponent, AddStudentComponent, AddStudentDetailsComponent, SearchStudentComponent, ViewStudentComponent, EditStudentInfoComponent, EditStudentDetailsComponent, StudentAttendanceComponent, DeleteStudentComponent, ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    MatDialogModule,
    NgxSkeletonLoaderModule,
  ],
  entryComponents: [
    DeleteStudentComponent
  ],
  providers: [  
   // MatDatepickerModule,  
  ],
  exports: [
    DashboardComponent
  ]
})
export class StudentModule { }
