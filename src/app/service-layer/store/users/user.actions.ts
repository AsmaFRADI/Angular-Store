import {Action} from '@ngrx/store';
import {UserModel} from '../../../core/models/userModel';


export const LOAD_LIST_USERS = '[List] Load List Users';
export const LOAD_LIST_USERS_SUCCESS = '[List] Load List Users Success';
export const LOAD_LIST_USERS_FAILURE = '[List] Load List Users Failure';

export const LOAD_ADD_USER = '[Add] Load Add User';
export const LOAD_ADD_USER_SUCCESS = '[Add] Load Add User Success';
export const LOAD_ADD_USER_FAILURE = '[Add] Load Add User Failure';

export const LOAD_EDIT_USER = '[Edit] Load Edit User';
export const LOAD_EDIT_USER_SUCCESS = '[Edit] Load Edit User Success';
export const LOAD_EDIT_USER_FAILURE = '[Edit] Load Edit User Failure';

export const LOAD_DELETE_USER = '[Delete] Load Delete User';
export const LOAD_DELETE_USER_SUCCESS = '[Delete] Load Delete User Success';
export const LOAD_DELETE_USER_FAILURE = '[Delete] Load Delete User Failure';

export class LoadUsersList implements Action {
  readonly type = LOAD_LIST_USERS;
}
export class LoadUsersListSuccess implements Action {
  readonly type = LOAD_LIST_USERS_SUCCESS;
  constructor(public payload: any) {
    console.log('List users[]', payload);
  }
}
export class LoadUsersListFailure implements Action {
  readonly type = LOAD_LIST_USERS_FAILURE;
  constructor(public payload: any) {
    console.log('error when getting users list', payload);
  }
}

export class LoadAddUser implements Action {
  readonly type = LOAD_ADD_USER;
  constructor(public payload: UserModel) {
  }
}
export class LoadAddUserSuccess implements Action {
  readonly type = LOAD_ADD_USER_SUCCESS;
  constructor(public payload: any) {
    console.log('add user', payload);
  }
}
export class LoadAddUserFailure implements Action {
  readonly type = LOAD_ADD_USER_FAILURE;
  constructor(public payload: any) {
    console.log('error when adding user', payload);
  }
}

export class LoadEditUser implements Action {
  readonly type = LOAD_EDIT_USER;
  constructor(public payload: UserModel) {
  }
}
export class LoadEditUserSuccess implements Action {
  readonly type = LOAD_EDIT_USER_SUCCESS;
  constructor(public payload: any) {
    console.log('edit user', payload);
  }
}
export class LoadEditUserFailure implements Action {
  readonly type = LOAD_EDIT_USER_FAILURE;
  constructor(public payload: any) {
    console.log('error when editing user', payload);
  }
}

export class LoadDeleteUser implements Action {
  readonly type = LOAD_DELETE_USER;
  constructor(public payload: any) {
  }
}
export class LoadDeleteUserSuccess implements Action {
  readonly type = LOAD_DELETE_USER_SUCCESS;
  constructor(public payload: any) {
    console.log('delete user', payload);
  }
}
export class LoadDeleteUserFailure implements Action {
  readonly type = LOAD_DELETE_USER_FAILURE;
  constructor(public payload: any) {
    console.log('error when deleting user', payload);
  }
}

export type UsersActions = LoadUsersList | LoadUsersListSuccess | LoadUsersListFailure
  | LoadAddUser | LoadAddUserSuccess | LoadAddUserFailure
  | LoadEditUser | LoadEditUserSuccess | LoadEditUserFailure
  | LoadDeleteUser | LoadDeleteUserSuccess | LoadDeleteUserFailure;
