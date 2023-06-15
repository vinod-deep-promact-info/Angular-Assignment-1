import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Components/employee/employee.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
  {
    path: 'Employee',
    component: EmployeeComponent
  },
  {
    path: 'Employee/add',
    component: AddEmployeeComponent
  },
  {
    path: 'Employee/edit/:id',
    component: AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
