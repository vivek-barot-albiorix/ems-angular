import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Constants } from './../../../../constants';

@Component({
  selector: 'app-professional-detail',
  templateUrl: './professional-detail.component.html',
  styleUrls: ['./professional-detail.component.scss'],
})
export class ProfessionalDetailComponent implements OnInit {
  @Input() regForm: FormGroup;
  skills = Constants.skills;
  expInYears = Constants.expInYears;
  expInMonths = Constants.expInMonths;
  // formSubmitted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  step3Submitted() {
    this.regForm.get('professionalDetails').get('designation').markAsTouched();
    this.regForm
      .get('professionalDetails')
      .get('designation')
      .updateValueAndValidity();
    this.regForm.get('professionalDetails').get('department').markAsTouched();
    this.regForm
      .get('professionalDetails')
      .get('department')
      .updateValueAndValidity();
    this.regForm.get('professionalDetails').get('expYears').markAsTouched();
    this.regForm
      .get('professionalDetails')
      .get('expYears')
      .updateValueAndValidity();
    this.regForm.get('professionalDetails').get('expMonths').markAsTouched();
    this.regForm
      .get('professionalDetails')
      .get('expMonths')
      .updateValueAndValidity();
    this.regForm
      .get('professionalDetails')
      .get('currentLocation')
      .markAsTouched();
    this.regForm
      .get('professionalDetails')
      .get('currentLocation')
      .updateValueAndValidity();
    this.regForm.get('professionalDetails').get('skills').markAsTouched();
    this.regForm
      .get('professionalDetails')
      .get('skills')
      .updateValueAndValidity();
  }

  // submit() {
  //   console.log('submitted');
  //   console.log(this.regForm.value);
  //   this.formSubmitted = true;
  //   this._addUser(this.regForm.value);
  // }

  // async _addUser(data) {
  //   const url = '/user/addUser';
  //   await this.http.post(url, data).subscribe({
  //     next: (data: any) => {
  //       // this.helperService.showSuccessToast(data.msg);
  //       console.log(data);
  //     },
  //     error: (error: any) => {
  //       // this.helperService.showErrorToast(error.message);
  //     },
  //   });
  // }
}
