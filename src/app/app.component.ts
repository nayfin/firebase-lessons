import { Component } from '@angular/core';
import { initializeApp, database} from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Seed Title';
  constructor() {

    const config = {
      apiKey: 'AIzaSyDB10dQMqsZg2WDyg6gQ2MSeRRME71oDHQ',
      authDomain: 'fir-lessons-aabef.firebaseapp.com',
      databaseURL: 'https://fir-lessons-aabef.firebaseio.com',
      projectId: 'fir-lessons-aabef',
      storageBucket: 'fir-lessons-aabef.appspot.com',
      messagingSenderId: '847664519994'
    };
    initializeApp(config);

    const root = firebase.database().ref();
    root.on('value', (snap)=>{
      console.log(snap);
    });
  }
}
