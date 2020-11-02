import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {path: '', component: ListComponent, data: {title: 'Users'}},
      {path: 'user', component: FormComponent, data: {title: 'User'}},
      {path: 'user/:id', component: FormComponent, data: {title: 'User'}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
