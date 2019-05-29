import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, public fireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.getUser$().subscribe( user => {
      user;
    });
  }

  getUser$() {
    return this.fireAuth.user;
  }

  logOut() {
    this.fireAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
