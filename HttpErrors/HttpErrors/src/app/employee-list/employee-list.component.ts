import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMsg;

// tslint:disable-next-line: variable-name
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                  error => this.errorMsg = error);
  }

}
