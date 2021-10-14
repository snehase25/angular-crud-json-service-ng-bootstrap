import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Member } from '../shared/member.model';
import { MemberService } from '../shared/member.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public member!: Member; // member model
  private index!: number;

  constructor(private location: Location, private memberService: MemberService) {
  }

  ngOnInit(): void {
    this.index = history.state.index;
    // Get the member to update
    this.getMember();
  }

  public goBack(): void {
    this.location.back();
  }

  // Get the member to update
  private getMember(): void {
    this.memberService.getMember(this.index)
      .subscribe(member => this.member = member);
  }
}
