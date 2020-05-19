import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component'



// define routes for your components
// defining array of objects of Routes
const routes: Routes = [
  // Empty Route
  {path:'', component:ChangePasswordComponent},
  {path:'change-password', component:ChangePasswordComponent},
  

  // Default Route
  // {path:'**',component:HomeComponent},
  {path:'**',redirectTo:'/change-password', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
