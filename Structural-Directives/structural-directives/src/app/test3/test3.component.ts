import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  template: `
    <div *ngFor="let color of colors; index as i; first as f; last as l">
      <h2 [style.color]="[(color)]">{{i}} - {{f}} {{color}} last element? {{l}}</h2>
    </div>
  `,
  styles: []
})
export class Test3Component implements OnInit {

  public colors = ['red', 'blue', 'green', 'orange'];

  constructor() { }

  ngOnInit() {
  }

}
