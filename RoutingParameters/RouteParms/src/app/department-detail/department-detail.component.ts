import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentID}}</h3>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>

    <div>
    <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentID;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
// tslint:disable-next-line: radix
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentID = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
// tslint:disable-next-line: prefer-const
      let id = parseInt(params.get('id'));
      this.departmentID = id;
     });
  }

  goPrevious() {
// tslint:disable-next-line: prefer-const
    let previousId = this.departmentID - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
// tslint:disable-next-line: prefer-const
    let nextId = this.departmentID + 1;
    this.router.navigate(['/departments', nextId]);
  }

  // Optional route parameters do not affect the view but can be used to apply logic to te view.
  gotoDepartments() {
    let selectedId = this.departmentID ? this.departmentID : null;
  //  this.router.navigate(['/departments', {id: selectedId, test: 'unusedTestValue'}])
  // relative navigation example =>
    this.router.navigate(['../', {id: selectedId, test: 'unsedTestValue'}], {relativeTo: this.route})
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
