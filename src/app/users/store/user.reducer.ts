import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { UserModel } from '../model/user.model';
import * as UserActions from './user.actions';

export const usersFeatureKey = 'users';

export interface UserState extends EntityState<UserModel> {
  // additional entities state properties
  error: any;
}

export const adapter: EntityAdapter<UserModel> = createEntityAdapter<UserModel>();

export const initialState: UserState = adapter.getInitialState({
  // additional entity state properties
  error: undefined,
});


export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsersSuccess,
    (state, action) => adapter.setAll(action.users, state)
  ),
  on(UserActions.loadUsersFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(UserActions.addUser,
    (state, action) => adapter.addOne(action.user, state)
  ),
  on(UserActions.updateUser,
    (state, action) => adapter.updateOne(action.user, state)
  ),
  on(UserActions.deleteUser,
    (state, action) => adapter.removeOne(action.id, state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
