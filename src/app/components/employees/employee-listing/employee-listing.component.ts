import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.scss'],
})
export class EmployeeListingComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this._faqs();
  }

  async _faqs() {
    const url = '/user/getUserList';
    await this.http.get(url).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
