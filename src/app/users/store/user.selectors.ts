import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, usersFeatureKey, selectAll } from './user.reducer';

export const listUserState = createFeatureSelector<UserState>(usersFeatureKey);

export const usersList = createSelector(listUserState, selectAll);

