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

  submit() {
    console.log('submitted');
    console.log(this.regForm.value);
    this.formSubmitted = true;
  }
}
