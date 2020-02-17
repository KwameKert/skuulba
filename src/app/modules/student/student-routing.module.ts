import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddStudentDetailsComponent } from './components/add-student-details/add-student-details.component';
import { SearchStudentComponent } from './components/search-student/search-student.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'addStudent', component: AddStudentComponent},
  {path: 'addStudentDetails', component: AddStudentDetailsComponent},
  {path:'searchStudent', component:SearchStudentComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
