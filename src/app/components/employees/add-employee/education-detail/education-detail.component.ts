import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.scss'],
})
export class EducationDetailComponent implements OnInit {
  @Input() regForm: FormGroup;
  formSubmitted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log('submitted');
    console.log(this.regForm.value);
    this.formSubmitted = true;
  }
}
