import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import {SharedModule} from '../../../shared/shared.module';
import {UsersRoutingModule} from './users-routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [ListUsersComponent, AddUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ],
  entryComponents: [
    AddUserComponent
  ]
})
export class UsersModule { }
