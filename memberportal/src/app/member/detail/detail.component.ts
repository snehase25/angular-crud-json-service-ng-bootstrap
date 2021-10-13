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
  member!: Member;
  index!: number;
  constructor(private location: Location, private memberService: MemberService) {
  }

  ngOnInit(): void {
    this.index = history.state.indexOfElement;
    // Get the member to update
    this.getMember();
  }

  goBack() {
    this.location.back();
  }

  // Get the member to update
  private getMember() {
    this.memberService.getMember(this.index)
      .subscribe(member => this.member = member);
  }
}
