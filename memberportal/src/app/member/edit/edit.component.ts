import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  memberInfo: any;
  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
    // Set the page name in session storage
    sessionStorage.setItem('page','edit');

    // Set the member details sent from list component via state
    this.memberInfo = history.state;
  }

  // "Save" button click
  updateMember() {
    // Navigate to list component to update the member in json members array
    this.router.navigateByUrl('/list', { state: this.memberInfo });
  }

  // "Back" button click
  goBack() {
    this.location.back();
  }
}
