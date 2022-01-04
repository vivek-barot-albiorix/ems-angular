import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Element {
  name: string;
  department: string;
  designation: string;
  email: string;
  mobile: string;
}

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.scss'],
})
export class EmployeeListingComponent implements OnInit {
  ELEMENT_DATA: Element[] = [];
  displayedColumns = ['name', 'department', 'designation', 'email', 'mobile'];
  dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    await this._getUserList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  async _getUserList() {
    const url = `/user/getUserList`;
    await this.http.get(url).subscribe({
      next: (data: any) => {
        data.body.forEach((element) => {
          this.ELEMENT_DATA.push({
            name: element.firstName,
            department: element.UserProfessionalDetails[0].department,
            designation: element.UserProfessionalDetails[0].designation,
            email: element.email,
            mobile: element.mobileNumber,
          });
        });
        this.dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
