import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../shared/member.model';
import { MemberService } from '../shared/member.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {
  public members!: Member[]; // member model
  private isSuccess: boolean = false; // TBD 

  constructor(private router: Router, private memberService: MemberService, private modalService: NgbModal) { }

  ngOnInit(): void {
    // Get members data
    this.getAllMembers();
  }

  // "Add Member" button click
  public createMember(): void {
    this.router.navigate(['/member/create']); //OR this.router.navigateByUrl('/add');
  }

  // Gets all the members
  private getAllMembers(): void {
    this.memberService.getAll()
      .subscribe(members => this.members = members);
  }

  // Opens delete modal
  public openDeleteModal(name: string,index: number): void {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.index = index; //input to deletemodal component
    modalRef.componentInstance.name = name; //input to deletemodal component
  }
}
