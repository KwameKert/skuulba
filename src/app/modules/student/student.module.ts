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
import { StudentDailyFeeComponent } from './components/student-daily-fee/student-daily-fee.component';
import { StudentSchoolFeeComponent } from './components/student-school-fee/student-school-fee.component';
import { StudentInvoiceComponent } from './components/student-invoice/student-invoice.component';
import { ViewInvoiceComponent } from './components/view-invoice/view-invoice.component';



@NgModule({
  declarations: [ DashboardComponent, AddStudentComponent, AddStudentDetailsComponent, SearchStudentComponent, ViewStudentComponent, EditStudentInfoComponent, EditStudentDetailsComponent, StudentAttendanceComponent, DeleteStudentComponent, StudentDailyFeeComponent, StudentSchoolFeeComponent, StudentInvoiceComponent,  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    MatDialogModule,
    NgxSkeletonLoaderModule,
  ],
  entryComponents: [
    DeleteStudentComponent,
    ViewInvoiceComponent
  ],
  providers: [  
   // MatDatepickerModule,  
  ],
  exports: [
    DashboardComponent
  ]
})
export class StudentModule { }
