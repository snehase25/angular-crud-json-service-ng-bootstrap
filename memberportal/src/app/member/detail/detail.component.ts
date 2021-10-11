import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  member: any;
  constructor(private location: Location) { }

  ngOnInit(): void {
    // Set the page name in session storage
    sessionStorage.setItem('page','detail');

    // Set the member details sent from list component via state
    this.member = history.state;
  }

  goBack() {
    this.location.back();
  }
}
