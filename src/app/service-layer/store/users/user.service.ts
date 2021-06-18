import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UserModel} from '../../../core/models/userModel';
import {API} from '../../../core/configs/api.const';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) {
  }
  listUsers() {
    return this.http.get(API.USERS.List_USERS);
  }
  addUser(userModel: UserModel) {
    return this.http.post(API.USERS.ADD_USER, userModel);
  }
  editUser(userModel: UserModel) {
    return this.http.put(API.USERS.EDIT_USER, userModel);
  }
  deleteUser(id) {
    return this.http.delete(API.USERS.DELETE_USER, {params: new HttpParams().set('id', id)});
  }
}
