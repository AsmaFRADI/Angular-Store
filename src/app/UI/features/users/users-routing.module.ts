import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddUserComponent} from './add-user/add-user.component';
import {ListUsersComponent} from './list-users/list-users.component';
import {EditUserComponent} from './edit-user/edit-user.component';


const routes: Routes = [
  {path: 'list-users', component:  ListUsersComponent},
  {path: 'add-user', component:  AddUserComponent},
  {path: 'edit-user', component:  EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
