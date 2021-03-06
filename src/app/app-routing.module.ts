import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
{
  path:'list',
  component: ListComponent
},
{
  path:'table',
  component: TableComponent
},
{
  path:'log',
  component: LogComponent
},
{
  path: '**',
  component: PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
