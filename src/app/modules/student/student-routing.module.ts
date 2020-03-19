import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddStudentDetailsComponent } from './components/add-student-details/add-student-details.component';
import { SearchStudentComponent } from './components/search-student/search-student.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { EditStudentInfoComponent } from './components/edit-student-info/edit-student-info.component';
import { EditStudentDetailsComponent } from './components/edit-student-details/edit-student-details.component';
import { StudentAttendanceComponent } from './components/student-attendance/student-attendance.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'addStudent', component: AddStudentComponent},
  {path: 'addStudentDetails/:id', component: AddStudentDetailsComponent},
  {path:'searchStudent', component:SearchStudentComponent},
  {path:'viewStudent/:id', component:ViewStudentComponent},
  {path:'dailyFee/:id', component:ViewStudentComponent},
  {path:'schoolFee/:id', component:ViewStudentComponent},
  {path:'invoice/:id', component:ViewStudentComponent},
  {path:'editStudentInfo/:id', component:EditStudentInfoComponent},
  {path:'editStudentDetails/:id', component:EditStudentDetailsComponent},
  {path:'studentAttendance', component:StudentAttendanceComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
