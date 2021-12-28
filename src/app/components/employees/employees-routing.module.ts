import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';

const childRoutes: Routes = [];

const routes: Routes = [
  {
    path: '',
    component: EmployeeListingComponent,
    children: childRoutes,
  },
  {
    path: 'add',
    component: AddEmployeeComponent,
    children: childRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
