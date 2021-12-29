import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Constants } from './../../../constants';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  registrationForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      personalDetails: new FormGroup({
        // firstName: new FormControl(null, Validators.required),
        // middleName: new FormControl(null, Validators.required),
        // lastName: new FormControl(null, Validators.required),
        // email: new FormControl(null, [Validators.required, Validators.email]),
        // mobileNumber: new FormControl(null, Validators.required),
        // contactNumber: new FormControl(null),
        // dob: new FormControl(new Date(), Validators.required),
        // presentAddress: new FormControl(null, Validators.required),
        // permanentAddress: new FormControl(null, Validators.required),
        firstName: new FormControl(null),
        middleName: new FormControl(null),
        lastName: new FormControl(null),
        email: new FormControl(null, Validators.email),
        mobileNumber: new FormControl(null),
        contactNumber: new FormControl(null),
        dob: new FormControl(new Date()),
        presentAddress: new FormControl(null),
        permanentAddress: new FormControl(null),
      }),
      bankDetails: new FormGroup({
        // bankName: new FormControl(null, Validators.required),
        // accountType: new FormControl(null, Validators.required),
        // accountNumber: new FormControl(null, Validators.required),
        // IFSCCode: new FormControl(null, Validators.required),
        // aadharNumber: new FormControl(null, Validators.required),
        // panNumber: new FormControl(null, Validators.required),
        bankName: new FormControl(null),
        accountType: new FormControl(null),
        accountNumber: new FormControl(0),
        IFSCCode: new FormControl(null),
        aadharNumber: new FormControl(0),
        panNumber: new FormControl(null),
      }),
      professionalDetails: new FormGroup({
        designation: new FormControl(null),
        department: new FormControl(null),
        expYears: new FormControl(Constants.expInYears[0].value),
        expMonths: new FormControl(null),
        currentLocation: new FormControl(null),
        skills: new FormControl(null),
      }),
      educationDetails: new FormGroup({}),
      // experienceDetails: new FormGroup({
      //   bankName: new FormControl(null, Validators.required),
      //   accountType: new FormControl(null, Validators.required),
      //   accountNumber: new FormControl(null, Validators.required),
      //   IFSCCode: new FormControl(null, Validators.required),
      //   aadharNumber: new FormControl(null, Validators.required),
      //   panNumber: new FormControl(null, Validators.required),
      // }),
      // organizationDetails: new FormGroup({
      //   bankName: new FormControl(null, Validators.required),
      //   accountType: new FormControl(null, Validators.required),
      //   accountNumber: new FormControl(null, Validators.required),
      //   IFSCCode: new FormControl(null, Validators.required),
      //   aadharNumber: new FormControl(null, Validators.required),
      //   panNumber: new FormControl(null, Validators.required),
      // }),
    });
  }
}
