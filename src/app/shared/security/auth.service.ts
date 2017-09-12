import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {AngularFireAuth } from 'angularfire2/auth';

import { AuthInfo } from './auth-info';

@Injectable()
export class AuthService {

  static UNKNOWN_USER = new AuthInfo(null);

  authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);

  constructor(private afAuth: AngularFireAuth) { }

  login(email, password): Observable<any> {
    return this.fromFirebaseAuthPromise(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }

  signUp(email, password): Observable<any> {
    return this.fromFirebaseAuthPromise(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.authInfo$.next(AuthService.UNKNOWN_USER);
  }
  fromFirebaseAuthPromise(promise): Observable<any> {
    const subject = new Subject<any>();

    promise
      .then( res => {
        const authInfo = new AuthInfo(this.afAuth.auth.currentUser.uid);
        this.authInfo$.next(authInfo);
        subject.next(res);
        subject.complete();
      },
      err => {
        this.authInfo$.error(err);
        subject.error(err);
        subject.complete();
      });

    return subject.asObservable();
  }
}
