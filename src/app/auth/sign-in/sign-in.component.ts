import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent {
  userMap = {
    0 : {
      displayName : 'Crystal Rhee',
      photoURL : 'assets/penguin.png',
      email : 'crystal@crystal.com',
      password : '123456'
    },
    1 : {
      displayName : 'Jessica Xu',
      photoURL : 'assets/cat.png',
      email : 'jessica@jessica.com',
      password : '123456'
    },
    2 : {
      displayName : 'Matt Joe',
      photoURL : 'assets/panda.png',
      email : 'matt@matt.com',
      password : '123456'
    },
    3 : {
      displayName : 'Spenser Cheung',
      photoURL : 'assets/dog.png',
      email : 'spenser@spenser.com',
      password : '123456'
    }
  };
  selectedId = -1;

  @Output()
  onSubmitted = new EventEmitter();

  constructor(private router: Router, public fireAuth: AngularFireAuth) {}

  ngOnInit() {
  }

  setSelected(id: number) {
    this.selectedId = id;
  }

  logIn() {
    let logInCredential = this.userMap[this.selectedId];
    this.fireAuth.auth.signInWithEmailAndPassword(logInCredential['email'], logInCredential['password']).then(auth => {
      this.router.navigate(['/dashboard']);
    });
  }

  // getUser() {
  //   let user = this.fireAuth.auth.currentUser;
  //   let userProfile = this.userMap[this.selectedId];
  //   this.fireAuth.auth.currentUser.updateProfile({
  //     displayName: userProfile['displayName'],
  //     photoURL: userProfile['photoURL']
  //   });
  //   return user;
  // }
}
