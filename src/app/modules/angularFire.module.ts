import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { firebaseConfig } from '../../environments/firebase.config';

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  exports: [
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ]
})

export class FirebaseModule { }
