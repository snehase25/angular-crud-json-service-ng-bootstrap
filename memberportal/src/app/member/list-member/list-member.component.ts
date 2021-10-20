import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../shared/member.model';
import { MemberService } from '../shared/member.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {
  public members!: Member[]; // member model
  private isSuccess: boolean = false; //not yet used ,it will be used in displaying success and failure messages
  public deleteIndex: number = -1; // used in delete member

  constructor(private router: Router, private memberService: MemberService, private modalService: NgbModal) { }

  ngOnInit(): void {
    // Get members data
    this.getAllMembers();
  }

  // "Add Member" button click
  public createMember(): void {
    this.router.navigate(['/member/create']); //OR this.router.navigateByUrl('/add');
  }

  // "Delete" button click
  public deleteMember(): void {
    this.memberService.delete(this.deleteIndex)
      .subscribe(isSucess => isSucess = this.isSuccess);
    console.log(this.members);
  }

  //Gets all the members
  private getAllMembers(): void {
    this.memberService.getAll()
      .subscribe(members => this.members = members);
  }

  //opens delete modal
  public openDeleteModal(content: any, index: number): void {
    this.deleteIndex = index;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
