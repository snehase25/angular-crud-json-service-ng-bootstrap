import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MemberService } from 'src/app/member/shared/member.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input() index!: number;
  @Input() name! : string;
  private isSuccess!: boolean;

  constructor(public activeModal: NgbActiveModal, private memberService: MemberService) { }

  ngOnInit(): void {
  }

  // "Delete" button click
  public deleteMember(): void {
    this.memberService.delete(this.index)
         .subscribe(isSuccess => this.isSuccess = isSuccess);
  }

}
