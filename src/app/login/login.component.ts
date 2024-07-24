import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialManagerService } from '../credential-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private credentialManager: CredentialManagerService,
    private router: Router
  ) {}
  form: any;
  subscription: any;
  loginObj: any;
  lists = ['User', 'Admin'];
  loginCheck: Boolean = false;
  isFormSubmitted = false;
  toastMessage: String = ' ';

  loginStatus: boolean = sessionStorage.getItem('username') ? true : false;

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      username: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),

      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  loginData() {
    this.loginObj = this.form.value;
    console.log(this.loginObj);
    this.userLogin();
  }

  redirectRegister() {
    this.router.navigateByUrl('/register');
  }

  userLogin() {
    // this.spinner.displayLoad(true);
    this.loginObj = this.form.value;

    this.subscription = this.credentialManager
      .loginUser(this.loginObj)
      .subscribe(
        (res: any) => {
          if (res['message'] == 'success') {
            sessionStorage.setItem('token', res['token']);
            this.loginStatus = true;
            sessionStorage.setItem('username', res['userObj']);
            sessionStorage.setItem('Usertype', this.loginObj.User);
            this.loginCheck = true;
            this.credentialManager.sendloginState(this.loginStatus);
          }

          if (res['message'] == 'Invalid username') {
            alert('invalid username');
          }
          if (res['message'] == 'Invalid Password') {
            alert('invalid password');
          }
        },

        (err) => {
          alert('Maintainence! Reach Out developer');
        }
      );
  }
}
