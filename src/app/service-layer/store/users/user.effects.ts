import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {UserService} from './user.service';
import * as fromUserActions from './user.actions';
import {map, switchMap} from 'rxjs/internal/operators';
import {UserModel} from '../../../core/models/userModel';


@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private userService: UserService) {
  }
  @Effect()
  loadUsers$ = this.action$.pipe(
    ofType<fromUserActions.LoadUsersList>(fromUserActions.LOAD_LIST_USERS),
    map((action: fromUserActions.LoadUsersList) => action),
    switchMap(() => {
      return this.userService.listUsers().pipe(
        map((data) => {
          return new fromUserActions.LoadUsersListSuccess(data);
        })
      );
    })
  );

  @Effect()
  loadAddUser$ = this.action$.pipe(
    ofType<fromUserActions.LoadAddUser>(fromUserActions.LOAD_ADD_USER),
    map((action: fromUserActions.LoadAddUser) => action.payload),
    switchMap((payload: UserModel) => {
      return this.userService.addUser(payload).pipe(
        map((data) => {
          return new fromUserActions.LoadAddUserSuccess(data);
        })
      );
    })
  );

  @Effect()
  loadEditUser$ = this.action$.pipe(
    ofType<fromUserActions.LoadEditUser>(fromUserActions.LOAD_EDIT_USER),
    map((action: fromUserActions.LoadEditUser) => action.payload),
    switchMap((payload: UserModel) => {
      return this.userService.editUser(payload).pipe(
        map((data) => {
          return new fromUserActions.LoadEditUserSuccess(data);
        })
      );
    })
  );

  @Effect()
  loadDeleteUser$ = this.action$.pipe(
    ofType<fromUserActions.LoadDeleteUser>(fromUserActions.LOAD_DELETE_USER),
    map((action: fromUserActions.LoadDeleteUser) => action.payload),
    switchMap((payload: any) => {
      return this.userService.deleteUser(payload).pipe(
        map((data) => {
          return new fromUserActions.LoadDeleteUserSuccess(data);
        })
      );
    })
  );

}
