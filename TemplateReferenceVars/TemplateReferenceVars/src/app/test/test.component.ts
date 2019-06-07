import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <input #myInput type="text">
    <button (click)="logMessage(myInput)">Log</button>

  `,
  styleUrls: []
})
export class TestComponent implements OnInit {

  public name = 'Codevolution';

  constructor() { }

  ngOnInit() {
  }

  logMessage(value) {
    console.log(value);
  }

}
