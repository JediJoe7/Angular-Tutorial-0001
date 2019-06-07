import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
     <h2>
      Welcome {{name}}
    </h2>
    <h2 [style.color]="'orange'">Style Binding</h2>

    <!-- conditional style binding -->
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>

    <!-- binding during assignment -->
    <h2 [style.color]="highlightColor">Style Binding 2</h2>

    <!-- multiple conditional styles -->
    <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Codevolution';
  public hasError = false;
  public isSpecial = false;
  public highlightColor = 'orange';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  }

  constructor() { }

  ngOnInit() {
  }

}
