import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
