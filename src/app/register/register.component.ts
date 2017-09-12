import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../shared/security/auth.service';

@Component({
  selector: 'bh-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

    constructor( private fb: FormBuilder,
                 private authService: AuthService,
                 private router: Router ) {

      this.registrationForm = fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', [ Validators.required ]]
      });
    }

    ngOnInit() {
    }

    signUp() {
      const formValue = this.registrationForm.value;

      this.authService.signUp(formValue.email, formValue.password)
        .subscribe(
          () => {
            alert('User created');
            this.router.navigate(['home']);
          },
          err => alert(err)
        );
    }

    isPasswordMatch() {
      const formValue = this.registrationForm.value;
      return formValue && formValue.password && formValue.password === formValue.confirmPassword;
    }

    // passwordsValidator(confirmControl: FormControl) {
    //   const value = confirmControl.value;

    //   if (!this.registrationForm) {
    //     return null;
    //   } else {
    //     const valid = value === this.registrationForm.get('password').value;

    //     return valid ? null : {
    //       passwordsMatch: {
    //         valid: false
    //       }
    //     };
    //   }

    // }
}
