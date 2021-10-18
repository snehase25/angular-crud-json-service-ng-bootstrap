import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../shared/member.model';
import { MemberService } from '../shared/member.service';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {
  public members!: Member[]; // member model
  private isSuccess: boolean = false;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit(): void {
    // Get members data
    this.getAllMembers();
  }

  // "Add Member" button click
  public createMember(): void {
    this.router.navigate(['/member/create']); //OR this.router.navigateByUrl('/add');
  }

  // "Delete" button click
  public deleteMember(index: number): void {
    if (confirm('Are you sure to delete ?')) {
      this.memberService.delete(index)
        .subscribe(isSucess => isSucess = this.isSuccess);
    }
  }

  //Gets all the members
  private getAllMembers(): void {
    this.memberService.getAll()
      .subscribe(members => this.members = members);
  }

}
