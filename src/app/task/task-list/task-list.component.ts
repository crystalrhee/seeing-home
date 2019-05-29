import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {
  private _tasks$: Observable<any>;
  myTaskName = '';

  constructor(private db: AngularFireDatabase, private fireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.getUser$().subscribe( user => {
      this._tasks$ = this.db.list(`/${user.uid}/task`).snapshotChanges()
      .pipe(map(items => items.map(item => ({key: item.key, ...item.payload.val() }))));
    });
  }

  getUser$() {
    return this.fireAuth.user;
  }

  getTasks$() {
    return this._tasks$;
  }

  get disableButton() {
    return !this.myTaskName || this.myTaskName.length === 0;
  }

  saveTask(userId) {
    this.db.list(`${userId}/task`).push({name: this.myTaskName})
    .then(() => {
      this.myTaskName = '';
    });
  }

  completeTask(uid, taskKey) {
    this.db.list(`${uid}/task/${taskKey}`).remove();
  }
}
