import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  private _posts$: Observable<any>;
  postInput = '';

  constructor(private db: AngularFireDatabase, private fireAuth: AngularFireAuth) { }

  ngOnInit() {
    this._posts$ = this.db.list(`all-users/posts`).snapshotChanges()
    .pipe(map(items => items.map(item => ({
      key: item.key, ...item.payload.val() }))));
  }

  getUser$() {
    return this.fireAuth.user;
  }

  getPost$() {
    return this._posts$;
  }

  get disableButton() {
    return !this.postInput || this.postInput.length === 0;
  }

  addPost(userId) {
    this.db.list(`all-users/posts`).push({
      author: this.fireAuth.auth.currentUser.displayName,
      image: this.fireAuth.auth.currentUser.photoURL,
      content: this.postInput,
      created: firebase.database.ServerValue.TIMESTAMP
    }).then(() => {
      this.postInput = '';
    });
  }
}
