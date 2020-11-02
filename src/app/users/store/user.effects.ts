import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { UsersService } from '../services/users.service';
import * as UserActions from './user.actions';


@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUsers),
    mergeMap(() => this.userService.getUsers().pipe(
        map(users => UserActions.loadUsersSuccess({users})),
        catchError(error => of(UserActions.loadUsersFailure(error)))
      ))
    )
  );


  constructor(
    private actions$: Actions,
    private userService: UsersService
  ) {}

}
