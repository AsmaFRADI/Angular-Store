import {Observable} from 'rxjs';
import {UserModel} from '../../core/models/userModel';
import {UserState} from '../../service-layer/store/users/user.reducers';

export interface UserInterface {
  getListUsers(users: UserModel): Observable<UserState>;
  addUser(users: UserModel): Observable<UserState>;
  editUser(users: UserModel): Observable<UserState>;
  deleteUser(userId): Observable<UserState>;
}
