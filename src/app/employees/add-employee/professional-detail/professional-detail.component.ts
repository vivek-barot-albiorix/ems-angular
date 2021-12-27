import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-professional-detail',
  templateUrl: './professional-detail.component.html',
  styleUrls: ['./professional-detail.component.scss'],
})
export class ProfessionalDetailComponent implements OnInit {
  @Input() regForm: FormGroup;
  formSubmitted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // step3Submitted() {
  //   this.regForm.get('professionalDetails').get('designation').markAsTouched();
  //   this.regForm
  //     .get('professionalDetails')
  //     .get('designation')
  //     .updateValueAndValidity();
  //   this.regForm.get('professionalDetails').get('department').markAsTouched();
  //   this.regForm
  //     .get('professionalDetails')
  //     .get('department')
  //     .updateValueAndValidity();
  //   this.regForm
  //     .get('professionalDetails')
  //     .get('currentLocation')
  //     .markAsTouched();
  //   this.regForm
  //     .get('professionalDetails')
  //     .get('currentLocation')
  //     .updateValueAndValidity();
  // }

  submit() {
    console.log('submitted');
    console.log(this.regForm.value);
    this.formSubmitted = true;
  }
}
