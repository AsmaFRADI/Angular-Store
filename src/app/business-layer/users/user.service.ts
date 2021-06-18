import {Observable} from 'rxjs';
import * as appStore from '../../service-layer/store/app.state';
import * as usersActions from '../../service-layer/store/users/user.actions';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import * as usersSelector from '../../service-layer/store/users/user.selectors';
import {UserInterface} from './user.interface';
import {UserModel} from '../../core/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserInterface {
  selectedUser = null;
  constructor(private store: Store<appStore.State>) {
  }
  getListUsers(): Observable<any> {
    this.store.dispatch(new usersActions.LoadUsersList());
    return this.store.select(usersSelector.listUsers);
  }
  addUser(addUser: UserModel): Observable<any> {
    this.store.dispatch(new usersActions.LoadAddUser(addUser));
    return this.store.select(usersSelector.addUser);
  }
  editUser(editUser: UserModel): Observable<any> {
    this.store.dispatch(new usersActions.LoadEditUser(editUser));
    return this.store.select(usersSelector.editUser);
  }
  deleteUser(userId): Observable<any> {
    this.store.dispatch(new usersActions.LoadDeleteUser(userId));
    return this.store.select(usersSelector.deleteUser);
  }
}
