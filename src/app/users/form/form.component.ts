import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { UserModel } from '../model/user.model';
import { usersList } from '../store/user.selectors';
import { UserState } from '../store/user.reducer';
import * as UserActions from '../store/user.actions';
import {Update} from '@ngrx/entity';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  List$: Observable<UserModel[]>;
  person: UserModel = new UserModel();
  newUser: boolean;

  constructor(
    private store: Store<UserState>,
    private routes: ActivatedRoute,
    private route: Router,
    ) { }

  ngOnInit(): void {
    this.List$ = this.store.pipe(select(usersList));
    this.List$.subscribe(res => {
      const urlParam = Number(this.routes.snapshot.paramMap.get('id'));
      if (urlParam) {
        const userVal = res.filter(item => item.id === urlParam).shift();
        if (userVal?.id) {
          this.person = Object.assign(new UserModel(), userVal);
        }
      } else {
        this.newUser = true;
        this.person = Object.assign(new UserModel());
        this.person.id = res.length + 1;
      }
    });

  }
  submit(): void {
    if (this.newUser) {
      this.store.dispatch(UserActions.addUser({user: this.person}));
      this.route.navigate(['/']);
    } else {
      const update: Update<UserModel> = {
        id: this.person.id,
        changes: this.person
      };
      this.store.dispatch(UserActions.updateUser({user: update}));
      this.route.navigate(['/']);
    }
  }

  BackHome(): void {
    this.route.navigate(['/']);
  }

}
