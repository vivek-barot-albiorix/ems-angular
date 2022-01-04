import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss'],
})
export class ExperienceDetailComponent implements OnInit {
  @Input() regForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    console.log('submitted');
    console.log(this.regForm.value);
    this.formSubmitted = true;
    this._addUser(this.regForm.value);
    this.router.navigate(["/employee"]);;
  }

  async _addUser(data) {
    const url = '/user/addUser';
    await this.http.post(url, data).subscribe({
      next: (data: any) => {
        // this.helperService.showSuccessToast(data.msg);
        console.log(data);
      },
      error: (error: any) => {
        // this.helperService.showErrorToast(error.message);
      },
    });
  }
}
