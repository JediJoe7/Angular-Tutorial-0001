import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'employee-detail',
  template: `
    <h2>Employee Details</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}, {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styleUrls: []
})
export class EmployeeDetailComponent implements OnInit {

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
