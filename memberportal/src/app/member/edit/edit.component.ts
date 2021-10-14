import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../shared/member.model';
import { MemberService } from '../shared/member.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public member!: Member; // member model
  private index!: number;
  private isSuccess: boolean = false;

  constructor(private location: Location, private router: Router, private memberService: MemberService) {

  }

  ngOnInit(): void {
    // Get the index of the member to be updated
    this.index = history.state.index;
    // Get the member to update
    this.getMember();
  }

  // "Save" button click
  public updateMember(): void {
    this.memberService.updateMember(this.index, this.member)
      .subscribe(isSuccess => this.isSuccess = isSuccess);
    this.location.back();
  }

  // "Back" button click
  public goBack(): void {
    this.location.back();
  }

  // Get the member to update
  private getMember(): void {
    this.memberService.getMember(this.index)
      .subscribe(member => this.member = member);
  }
}
