import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  member: any;
  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    // Set the page name in session storage
    sessionStorage.setItem('page','add');
    
    // Set the member details sent from list component via state
    this.member = history.state;
  }

  // "Save" button click
  addMember() {
    // Navigate to list component to add the member in json members array
    this.router.navigateByUrl('/list', { state: this.member });
  }

  // "Back" button click
  goBack() {
    this.location.back();
  }
}
