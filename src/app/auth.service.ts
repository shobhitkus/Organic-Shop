import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import { switchMap, map } from 'rxjs/operators';
import { AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor( private userService: UserService,
    private afAuth: AngularFireAuth, 
    private router: Router,
    private route: ActivatedRoute) { 
    this.user$=afAuth.authState;
  }
  login(){
    let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
    prompt: 'select_account'
    });
    firebase.auth().signInWithPopup(provider)

  }
  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
  get appUser$(): Observable<AppUser>{
    return this.user$
  .pipe(switchMap(user => {
    if(user) return this.userService.get(user.uid).valueChanges();

    else return of(null);
  }) );
  }
}
