import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { UserModel } from '../model/user.model';
import * as UserActions from '../store/user.actions';
import {UserState} from '../store/user.reducer';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() card: UserModel;

  constructor(private store: Store<UserState>, private route: Router ) { }

  ngOnInit(): void {
  }

  editCard(id): void {
    this.route.navigate(['/user/' + id]);
  }

  deleteCard(id): void {
    this.store.dispatch(UserActions.deleteUser({id}));
  }
}
