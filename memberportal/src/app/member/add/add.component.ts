import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Member } from '../shared/member.model';
import { MemberService } from '../shared/member.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public member: Member = {}; // member model
  private isSuccess: boolean = false;

  constructor(private location: Location, private memberService: MemberService) { }

  ngOnInit(): void {

  }

  // "Save" button click
  public addMember(): void {
    this.memberService.addMember(this.member)
      .subscribe(isSuccess => this.isSuccess = this.isSuccess);
    this.location.back();
  }

  // "Back" button click
  public goBack(): void {
    this.location.back();
  }
}
