import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { PersonalDetailComponent } from './add-employee/personal-detail/personal-detail.component';
import { BankDetailComponent } from './add-employee/bank-detail/bank-detail.component';
import { ProfessionalDetailComponent } from './add-employee/professional-detail/professional-detail.component';
import { MaterialExampleModule } from '../material.module';

@NgModule({
  declarations: [
    EmployeeListingComponent,
    AddEmployeeComponent,
    PersonalDetailComponent,
    BankDetailComponent,
    ProfessionalDetailComponent,
  ],
  imports: [
    EmployeesRoutingModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    CommonModule,
  ],
  exports: [
    PersonalDetailComponent,
    BankDetailComponent,
    ProfessionalDetailComponent,
  ],
})
export class EmployeesModule {}
