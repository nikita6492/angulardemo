import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { ListemployeeComponent } from './employee/listemployee/listemployee.component';
import { ViewemployeeComponent } from './employee/viewemployee/viewemployee.component';

const routes: Routes = [


{path:'employee',
children:[
  {path:'',component:ListemployeeComponent},
  {path:'list',component:ListemployeeComponent},
  {path:'create',component:AddemployeeComponent},
  {path:'edit/:id',component:EditemployeeComponent},
  {path:'delete/:id',component:DeleteemployeeComponent},
  {path:'view/:id',component:ViewemployeeComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
