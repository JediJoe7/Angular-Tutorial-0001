import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// NOTE:  the ordering of the wildcard route doesn't seem to work unless it's the second element */
const routes: Routes = [
  { path: 'departments', component: DepartmentListComponent},
  { path: '', redirectTo: 'departments', pathMatch: 'full'},
  { path: 'employees', component: EmployeeListComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,
                                 EmployeeListComponent,
                                 PageNotFoundComponent];
