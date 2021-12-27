import { NgModule } from '@angular/core';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@NgModule({
  declarations: [EmployeeListingComponent, AddEmployeeComponent],
  imports: [EmployeesRoutingModule],
})
export class EmployeesModule {}
