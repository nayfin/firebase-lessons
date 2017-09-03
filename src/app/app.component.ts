import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firebase Sandbox';

  courses$: FirebaseListObservable<any>;
  lastCourse$: any;
  constructor(private db: AngularFireDatabase) {

    this.courses$ = db.list('courses');
    this.courses$.subscribe(console.log);

    this.courses$.map(courses => {
      return courses[courses.length - 1];
    }).subscribe(
      (course) => this.lastCourse$ = course
    );
    // this.lastCourse$ = db.object('courses').;
    // this.lastCourse$.subscribe(console.log);
  }

  listPush() {
    this.courses$.push({description: 'Test list push'});
  }

  listRemove() {
    this.courses$.remove(this.lastCourse$);
  }

  listUpdate() {

  }
  objSet() {

  }
  objUpdate() {

  }
}
