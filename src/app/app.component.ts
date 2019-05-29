import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'seeing-home';
  tasks: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.tasks = db.list('/task').valueChanges();
  }
  loggedIn = true;
}
