import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-list/employee.service';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}, {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styleUrls: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
