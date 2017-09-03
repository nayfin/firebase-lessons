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
  firstCourse$: FirebaseObjectObservable<any>;
  constructor(private db: AngularFireDatabase) {

    this.courses$ = db.list('courses');
    this.courses$.subscribe(console.log);

    this.firstCourse$ = db.object('courses/-Kt2Go8gofwGeNMb1f7p');
    this.firstCourse$.subscribe(console.log);
  }

  listPush() {
    this.courses$.push({description: 'Test list push'});
  }

  listRemove() {

  }

  listUpdate() {

  }
  objSet() {

  }
  objUpdate() {

  }
}
