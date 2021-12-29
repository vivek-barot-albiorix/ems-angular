import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent implements OnInit {
  private static readonly errorMessages = {
    email: (params: any, ctName: string) => `${ctName} must be a valid email address`,
    required: (params: any, ctName: string) => `${ctName} is required`,
    dateRangeInvalid: (params: any, ctName: string) => `${ctName} is invalid`,
    minlength: (params: any) => 'The min number of characters is ' + params.requiredLength,
    maxlength: (params: any) => 'The max allowed number of characters is ' + params.requiredLength,
    pattern: (params: any) => 'The required pattern is: ' + params.requiredPattern,
    patternInvalid: (params: any) => 'The required pattern is: ' + params.regexp,
    years: (params: any) => params.message,
    countryCity: (params: any) => params.message,
    uniqueName: (params: any) => params.message,
    telephoneNumbers: (params: any) => params.message,
    telephoneNumber: (params: any) => params.message,
    outOfRangeDateTime: (params: any, ctName: string) => `Date range is invalid, from date should be smaller than until date`,
    requiredDateTimeDuo: (params: any, ctName: string) => `Date & Time both are required`,
    invalidHtml: () => 'Invalid HTML'
  };

  @Input()
  public control: AbstractControlDirective | AbstractControl;

  @Input()
  public messages: any = {};

  @Input()
  public controlName: any;

  constructor() { }

  ngOnInit() {
    if (!this.controlName) {
      this.controlName = this.getControlName(this.control as FormControl);
    }
  }
  shouldShowErrors(): boolean {
    const isFormDirty = (this.control as FormControl).parent.dirty;
    return this.control &&
      this.control.errors &&
      ((this.control.touched && this.control.dirty && isFormDirty));
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getControlName(c: AbstractControl): string | null {
    const formGroup = c.parent.controls;
    const controlName = this.prettifyCamelCase(Object.keys(formGroup).find(name => c === formGroup[name]) || null);
    return controlName;
  }

  private getMessage(type: string, params: any) {
    return this.messages[type] || ValidationMessageComponent.errorMessages[type](params, this.controlName);
  }

  private prettifyCamelCase(str) {
    let output = '';
    const len = str.length;
    let char;

    for (let i = 0; i < len; i++) {
      char = str.charAt(i);

      if (i === 0) {
        output += char.toUpperCase();
      } else if (char !== char.toLowerCase() && char === char.toUpperCase()) {
        output += ' ' + char;
      } else if (char === '-' || char === '_') {
        output += ' ';
      } else {
        output += char;
      }
    }
    return output;
  }
}
