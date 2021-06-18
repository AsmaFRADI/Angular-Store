import * as fromUserReducer from './user.reducers' ;
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as appState from '../app.state';

export const getUserModuleState = createFeatureSelector<appState.State, fromUserReducer.UserState>('users');

export const listUsersLoading = createSelector(getUserModuleState, fromUserReducer.getUsersLoading);
export const listUsersLoaded = createSelector(getUserModuleState, fromUserReducer.getUsersLoaded);
export const listUsers = createSelector(getUserModuleState, fromUserReducer.getUsersList);
export const addUser = createSelector(getUserModuleState, fromUserReducer.addUser);
export const editUser = createSelector(getUserModuleState, fromUserReducer.editUser);
export const deleteUser = createSelector(getUserModuleState, fromUserReducer.deleteUser);
