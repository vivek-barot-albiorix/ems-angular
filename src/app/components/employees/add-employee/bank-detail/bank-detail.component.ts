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
    this.regForm.get('bankDetails').get('bankName').markAsTouched();
    this.regForm.get('bankDetails').get('bankName').updateValueAndValidity();
    this.regForm.get('bankDetails').get('accountType').markAsTouched();
    this.regForm.get('bankDetails').get('accountType').updateValueAndValidity();
    this.regForm.get('bankDetails').get('accountNumber').markAsTouched();
    this.regForm
      .get('bankDetails')
      .get('accountNumber')
      .updateValueAndValidity();
    this.regForm.get('bankDetails').get('IFSCCode').markAsTouched();
    this.regForm.get('bankDetails').get('IFSCCode').updateValueAndValidity();
    this.regForm.get('bankDetails').get('aadharNumber').markAsTouched();
    this.regForm
      .get('bankDetails')
      .get('aadharNumber')
      .updateValueAndValidity();
    this.regForm.get('bankDetails').get('panNumber').markAsTouched();
    this.regForm.get('bankDetails').get('panNumber').updateValueAndValidity();
  }
}
