import { Component, OnInit } from '@angular/core';
import { loadUsers } from './store/user.actions';
import { Store } from '@ngrx/store';
import { UserState } from './store/user.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private store: Store<UserState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

}
