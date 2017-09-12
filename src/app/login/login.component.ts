import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../shared/security/auth.service';

@Component({
  selector: 'bh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private router: Router ) {

    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    const formValue = this.loginForm.value;

    this.authService.login(formValue.email, formValue.password)
      .subscribe(
        () => this.router.navigate(['home'])
      )
  }
}
