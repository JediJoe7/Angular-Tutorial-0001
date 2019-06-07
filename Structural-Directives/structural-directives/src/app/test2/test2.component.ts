import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again<div>
    </div>
  `,
  styles: []
})
export class Test2Component implements OnInit {

  public color = 'purple';

  constructor() { }

  ngOnInit() {
  }

}
