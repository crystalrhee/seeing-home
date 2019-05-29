import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-appliance',
  templateUrl: './appliance.component.html',
  styleUrls: ['./appliance.component.sass']
})
export class ApplianceComponent implements OnInit {
  private _appliances$: Observable<any>;

  constructor(private db: AngularFireDatabase, private fireAuth: AngularFireAuth) { }

  ngOnInit() {
    this._appliances$ = this.db.list(`all-users/state`).snapshotChanges()
    .pipe(map(items => items.map(item => ({
      key: item.key, ...item.payload.val() }))));
  }

  getAppliances$() {
    for (let item of [this._appliances$]) { 
      item;
    }
    return this._appliances$;
  }

  toggleState(appKey, isUsed) {
    let state = !isUsed;
    console.log(state);
    this.db.object(`all-users/state/${appKey}/isUsed`).set(state);
  }
}
