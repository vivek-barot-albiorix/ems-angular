import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss'],
})
export class PersonalDetailComponent implements OnInit {
  @Input() regForm: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  step1Submitted() {
    this.regForm.get('personalDetails').get('firstName').markAsTouched();
    this.regForm
      .get('personalDetails')
      .get('firstName')
      .updateValueAndValidity();
    this.regForm.get('personalDetails').get('middleName').markAsTouched();
    this.regForm
      .get('personalDetails')
      .get('middleName')
      .updateValueAndValidity();
    this.regForm.get('personalDetails').get('lastName').markAsTouched();
    this.regForm
      .get('personalDetails')
      .get('lastName')
      .updateValueAndValidity();
    this.regForm.get('personalDetails').get('email').markAsTouched();
    this.regForm.get('personalDetails').get('email').updateValueAndValidity();
    this.regForm.get('personalDetails').get('mobileNumber').markAsTouched();
    this.regForm
      .get('personalDetails')
      .get('mobileNumber')
      .updateValueAndValidity();
    this.regForm.get('personalDetails').get('contactNumber').markAsTouched();
    this.regForm
      .get('personalDetails')
      .get('contactNumber')
      .updateValueAndValidity();
    this.regForm.get('personalDetails').get('dob').markAsTouched();
    this.regForm.get('personalDetails').get('dob').updateValueAndValidity();
    this.regForm.get('personalDetails').get('presentAddress').markAsTouched();
    this.regForm
      .get('personalDetails')
      .get('presentAddress')
      .updateValueAndValidity();
    this.regForm.get('personalDetails').get('permanentAddress').markAsTouched();
    this.regForm
      .get('personalDetails')
      .get('permanentAddress')
      .updateValueAndValidity();
  }
}
