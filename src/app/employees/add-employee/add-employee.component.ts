import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  registrationForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      personalDetails: new FormGroup({
        // firstName: new FormControl(null, Validators.required),
        // middleName: new FormControl(null, Validators.required),
        // lastName: new FormControl(null, Validators.required),
        // email: new FormControl(null, [Validators.required, Validators.email]),
        // mobileNumber: new FormControl(null, Validators.required),
        // contactNumber: new FormControl(null, Validators.required),
        // presentAddress: new FormControl(null, Validators.required),
        // permanentAddress: new FormControl(null, Validators.required),
        firstName: new FormControl(null),
        middleName: new FormControl(null),
        lastName: new FormControl(null),
        email: new FormControl(null, Validators.email),
        mobileNumber: new FormControl(null),
        contactNumber: new FormControl(null),
        // presentAddress: new FormControl(null),
        // permanentAddress: new FormControl(null),
      }),
      bankDetails: new FormGroup({
        bankName: new FormControl(null, Validators.required),
        accountType: new FormControl(null, Validators.required),
        accountNumber: new FormControl(null, Validators.required),
        IFSCCode: new FormControl(null, Validators.required),
        aadharNumber: new FormControl(null, Validators.required),
        panNumber: new FormControl(null, Validators.required),
      }),
      // professionalDetails: new FormGroup({
      //   designation: new FormControl(null, Validators.required),
      //   department: new FormControl(null, Validators.required),
      //   currentLocation: new FormControl(null, Validators.required),
      // }),
      // educationDetails: new FormGroup({
      //   bankName: new FormControl(null, Validators.required),
      //   accountType: new FormControl(null, Validators.required),
      //   accountNumber: new FormControl(null, Validators.required),
      //   IFSCCode: new FormControl(null, Validators.required),
      //   aadharNumber: new FormControl(null, Validators.required),
      //   panNumber: new FormControl(null, Validators.required),
      // }),
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

    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required],
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // });
  }
}
