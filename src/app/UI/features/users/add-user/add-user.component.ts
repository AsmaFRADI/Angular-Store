import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../business-layer/users/user.service';
import {UserModel} from '../../../../core/models/userModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
      ])],
      lastName: ['', Validators.compose([
        Validators.required,
      ])],
      email: ['', Validators.compose([
        Validators.required,
      ])],
      address: ['', Validators.compose([
        Validators.required,
      ])]
    });
  }
  addUser() {
    if (this.userForm.invalid) {return; }
    const addUserRq: UserModel = {
      name: this.userForm.controls.name.value,
      lastName: this.userForm.controls.lastName.value,
      email: this.userForm.controls.email.value,
      address: this.userForm.controls.address.value
    };
    this.userService.addUser(addUserRq).subscribe((res) => {
      if (res) {
        console.log('res', res);
        this.router.navigate(['/list-users']);
      }
    });
  }
  cancelAdd() {
    this.router.navigate(['/list-users']);
  }

}
