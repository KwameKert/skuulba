import { NgModule } from '@angular/core';
import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {DefaultComponent} from './layouts/default/default.component';
import { AuthGuard } from './auth.guard';

const routes: Routes= [
{
  path:'', 
  component: AuthLayoutComponent,
  loadChildren: () => import('./modules/authentication/authentication.module')
                     .then(m => m.AuthenticationModule)
  
                     
                 
},

{
  path:'student', 
  component: DefaultComponent,
  loadChildren: () => import('./modules/student/student.module')
                     .then(m => m.StudentModule),
                     canActivate:[AuthGuard]
}
 ,           

{
  path:'finance', 
  component: DefaultComponent,
  loadChildren: () => import('./modules/finance/finance.module')
                     .then(m => m.FinanceModule),
                     canActivate:[AuthGuard]
                    
},
{path: "**", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
