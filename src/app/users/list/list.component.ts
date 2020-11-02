import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UsersService } from '../services/users.service';
import { UserModel } from '../model/user.model';
import { UserState } from '../store/user.reducer';
import { usersList } from '../store/user.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  userList$: Observable<UserModel[]>;

  constructor(
    private users: UsersService,
    private store: Store<UserState>
  ) { }

  ngOnInit(): void {
    this.userList$ = this.store.pipe(select(usersList));
  }

}
