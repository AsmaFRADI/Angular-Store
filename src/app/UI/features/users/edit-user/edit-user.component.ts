import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../../core/models/userModel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../business-layer/users/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      name: [this.userService.selectedUser.name, Validators.compose([
        Validators.required,
      ])],
      lastName: [this.userService.selectedUser.lastName, Validators.compose([
        Validators.required,
      ])],
      email: [this.userService.selectedUser.email, Validators.compose([
        Validators.required,
      ])],
      address: [this.userService.selectedUser.address, Validators.compose([
        Validators.required,
      ])]
    });
  }
  editUser() {
    if (this.userForm.invalid) {return; }
    const editUserRq: UserModel = {
      name: this.userForm.controls.name.value,
      lastName: this.userForm.controls.lastName.value,
      email: this.userForm.controls.email.value,
      address: this.userForm.controls.address.value
    };
    this.userService.editUser(editUserRq).subscribe((res) => {
      if (res) {
        console.log('res', res);
        this.router.navigate(['/list-users']);
      }
    });
  }
  cancelEdit() {
    this.router.navigate(['/list-users']);
  }
}
