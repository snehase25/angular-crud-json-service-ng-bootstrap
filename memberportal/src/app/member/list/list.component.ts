import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../shared/member.model';
import { MemberService } from '../shared/member.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public members!: Member[]; // Stores member details
  private isSuccess: boolean = false;

  constructor(private router: Router, private memberService: MemberService) { this.getAllMembers(); }

  ngOnInit(): void {
    // Get members data
    this.getAllMembers();
  }

  // "Add Member" button click
  addMember(): void {
    this.router.navigate(['/add']); //OR this.router.navigateByUrl('/add');
  }

  // "Delete" button click
  deleteMember(index: number): void {
    if (confirm('Are you sure to delete ?')) {
      this.memberService.deleteMember(index)
        .subscribe(isSucess => isSucess = this.isSuccess);
    }
  }

  //Gets all the members
  private getAllMembers(): void {
    this.memberService.getAllMembers()
      .subscribe(members => this.members = members);
  }
}
