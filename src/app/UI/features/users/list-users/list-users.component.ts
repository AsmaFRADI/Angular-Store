import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UserService} from '../../../../business-layer/users/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  usersList$: Observable<any>;
  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.usersList$ = this.userService.getListUsers();
    console.log('list users', this.usersList$);
  }
  goToAddUser() {
   this.router.navigate(['/add-user']);
  }
  goToEditUser(user) {
    this.userService.selectedUser = user;
    this.router.navigate(['/edit-user']);
  }
  deleteUser(userId) {
    this.userService.deleteUser(userId).subscribe((res) => {
      if (res) {
        console.log('res', res);
      }
    });
  }
}
