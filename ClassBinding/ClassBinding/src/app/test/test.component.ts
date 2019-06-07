import { Component, OnInit } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2 class="text-success">Codevolution</h2>

    <!-- class binding -->
    <h2 [class]="successClass">Codevolution</h2>

    <!-- class binding overrides class attribute -->
    <h2 class="text-special" [class]="successClass">Codevolution</h2>

    <!-- conditional binding -->
    <h2 [class.text-danger]="hasError">Codevolution</h2>

    <!--  conditional binding of multiple classes -->
    <h2 [ngClass]="messageClasses">Codevolution</h2>

  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = 'Codevolution';
  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
