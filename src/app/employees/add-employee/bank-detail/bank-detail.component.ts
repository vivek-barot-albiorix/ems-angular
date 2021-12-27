import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.scss'],
})
export class BankDetailComponent implements OnInit {
  @Input() regForm: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  step2Submitted() {
    this.regForm.get('contactDetails').get('email').markAsTouched();
    this.regForm.get('contactDetails').get('email').updateValueAndValidity();
  }
}
