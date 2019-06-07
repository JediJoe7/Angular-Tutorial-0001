import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <input [id]="myId" type="text" value="Vishwas">
    <!-- property binding must be used with bool values because interpolition only works with string values. -->
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Vishwas">
    <!-- and alternate syntax for property binding -->
    <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Vishwas">

    `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = 'Codevolution';
  public myId = 'testId';
  public isDisabled = false;
  constructor() { }

  ngOnInit() {
  }

}
