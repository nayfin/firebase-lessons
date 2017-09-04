import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// TODO: You've prepared the header by seperating links into userLinks and authLinks and created a variable loggedIn to track auth status; 



export class HeaderComponent implements OnInit {
  // TODO: make this an input
  @Input() title: string;

  routes = [
    { path : 'home', title: 'Home' },
    { path : 'lessons', title: 'Lessons' },
    { path : 'courses', title: 'Courses' },
  ];
  // TODO: Import appRoutes after seperated into module, or create links service to provide to routes and header

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }
}
