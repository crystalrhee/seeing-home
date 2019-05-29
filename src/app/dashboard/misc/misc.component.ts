import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.sass']
})
export class MiscComponent implements OnInit {
  selectedUser = '';

  constructor() { }

  ngOnInit() {
    this.getRandomUser();
  }

  getRandomUser() {
    var myArray = [
      "Crystal",
      "Jessica",
      "Matt",
      'Spenser'
    ];
    this.selectedUser = myArray[Math.floor(Math.random()*myArray.length)];
  }
}
