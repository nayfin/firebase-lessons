import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Seed Title';
  constructor(private db: AngularFireDatabase) {

    const courses$: FirebaseListObservable<any> = db.list('courses');

    courses$.subscribe(
      val => console.log('courses', val)
    );
  }
}
