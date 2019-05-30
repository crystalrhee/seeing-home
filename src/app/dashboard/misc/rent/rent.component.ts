import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.sass']
})
export class RentComponent implements OnInit {
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  currentMonth = new Date();
  month = this.monthNames[this.currentMonth.getMonth()]


  constructor(private db: AngularFireDatabase, private fireAuth: AngularFireAuth) { }
  private _rent$: Observable<any>;

  ngOnInit() {
    this.getUser$().subscribe( user => {
      this._rent$ = this.db.object(`/${user.uid}/rent`).snapshotChanges()
      .pipe(map(item => ({
        key: item.key, ...item.payload.val() })));
    });
  }

  getUser$() {
    return this.fireAuth.user;
  }

  getRent$() {
    return this._rent$;
  }

  getMonth() {
    return this.month;
  }
}
