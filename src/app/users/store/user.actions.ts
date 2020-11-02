import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { UserModel } from '../model/user.model';

export const loadUsers = createAction(
  '[User/API] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User/API Effect] Load Users Success',
  props<{ users: UserModel[] }>()
);

export const loadUsersFailure = createAction(
  '[User/API Effect] Load Users Failure',
  props<{ error: any }>()
);

export const addUser = createAction(
  '[Add Form User] Add User',
  props<{ user: UserModel }>()
);

export const updateUser = createAction(
  '[Update Form User] Update Users',
  props<{ user: Update<UserModel> }>()
);

export const deleteUser = createAction(
  '[Delete User] Delete User',
  props<{ id: string }>()
);

