import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthInfo } from './../../shared/security/auth-info';
import { AuthService } from './../../shared/security/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// TODO: You've prepared the header by seperating links into userLinks and authLinks and created a variable loggedIn to track auth status; 

export class HeaderComponent implements OnInit {
  // TODO: make this an input
  @Input() title: string;

  authInfo: AuthInfo;

  routes = [
    { path : 'home', title: 'Home' },
    { path : 'lessons', title: 'Lessons' },
    { path : 'courses', title: 'Courses' },
  ];
  // TODO: Import appRoutes after seperated into module, or create links service to provide to routes and header

  constructor(private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    this.authService.authInfo$.subscribe(authInfo => this.authInfo = authInfo);
  }

  logout() {
    this.authService.logout();
  }
}
