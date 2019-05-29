import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-guest-trash',
  templateUrl: './guest-trash.component.html',
  styleUrls: ['./guest-trash.component.sass']
})
export class GuestTrashComponent implements OnInit {
  private _states$: Observable<any>;
  private guest: string;
  private trash: string;

  constructor(private db: AngularFireDatabase, private fireAuth: AngularFireAuth) { }

  ngOnInit() {
    this._states$ = this.db.list(`all-users/guest-trash`).snapshotChanges()
    .pipe(map(items => items.map(item => ({
      key: item.key, ...item.payload.val() }))));
  }

  getStates$() {
    for (let item of [this._states$]) { 
      item;
    }
    return this._states$;
  }

  toggleState(appKey, isThere) {
    let state = !isThere;
    this.db.object(`all-users/guest-trash/${appKey}/isThere`).set(state);
  }
}
