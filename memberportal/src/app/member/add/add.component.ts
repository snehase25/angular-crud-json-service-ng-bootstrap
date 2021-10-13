import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../shared/member.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  member: any = {};
  isSuccess: boolean = false;

  constructor(private location: Location, private memberService: MemberService) { }

  ngOnInit(): void {

  }

  // "Save" button click
  addMember() {
    this.memberService.addMember(this.member)
      .subscribe(isSuccess => this.isSuccess = this.isSuccess);
    this.location.back();
  }

  // "Back" button click
  goBack() {
    this.location.back();
  }
}
