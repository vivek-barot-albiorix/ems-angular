import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { PersonalDetailComponent } from './add-employee/personal-detail/personal-detail.component';
import { BankDetailComponent } from './add-employee/bank-detail/bank-detail.component';
import { ProfessionalDetailComponent } from './add-employee/professional-detail/professional-detail.component';
import { EducationDetailComponent } from './add-employee/education-detail/education-detail.component';
import { ExperienceDetailComponent } from './add-employee/experience-detail/experience-detail.component';
import { OrganizationDetailComponent } from './add-employee/organization-detail/organization-detail.component';
import { MaterialExampleModule } from './../../material.module';

@NgModule({
  declarations: [
    EmployeeListingComponent,
    AddEmployeeComponent,
    PersonalDetailComponent,
    BankDetailComponent,
    ProfessionalDetailComponent,
    EducationDetailComponent,
    ExperienceDetailComponent,
    OrganizationDetailComponent,
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
    EducationDetailComponent,
  ],
})
export class EmployeesModule {}
