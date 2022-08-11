import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CredentialManagerService } from '../credential-manager.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  status = 'data';

  public types = ['User', 'Admin'];
  myForm: FormGroup;
  lists = ['User', 'Admin'];
  products = [''];
  validity: boolean = false;
  constructor(
    private us: CredentialManagerService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      user: [null, Validators.required],
    });
  }
  clickedSubmit(formRef: any) {
    if (formRef.status) {
      this.validity = true;
      let dataFromForm = formRef.value;
      if (dataFromForm.radioType == 'userChecked') {
        this.us.createUser(dataFromForm).subscribe(
          (res: any) => {
            if (res['message'] == 'user created') {
              alert(`${res['message']} Successfully `);
              // this.router.navigateByUrl('/login');
            } else {
              alert('The email or username is already exist ');
            }
          },
          (err: any) => {
            alert('Something is wrong while creating');
            console.log(err);
          }
        );
      }
      if (dataFromForm.radioType == 'adminChecked') {
        dataFromForm.products = [];
        console.log('new admin', dataFromForm);
      }
    } else {
      this.validity = true;
      this.toastr.warning('All fields are Mandatory');
    }
  }
}
