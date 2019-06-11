import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentID}}</h3>
    <a (click)="goPrevious()">Previous</a>&nbsp;&nbsp;
    <a (click)="goNext()">Next</a>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentID;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
// tslint:disable-next-line: radix
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentID = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
// tslint:disable-next-line: radix
      let id = parseInt(params.get('id'));
      this.departmentID = id;
     });
  }

  goPrevious(){
    let previousId = this.departmentID - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentID + 1;
    this.router.navigate(['/departments', nextId]);
  }

}
