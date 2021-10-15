import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from 'src/app/shared/services/message.service';
import { Member } from './member.model';
import { MEMBERS } from './mock-members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private messageService: MessageService) { }

  // get all members
  getAllMembers(): Observable<Member[]> {
    const members = of(MEMBERS);
    return members;
  }

  // get a member from index
  getMember(index: number): Observable<Member> {
    const member = MEMBERS[index];
    return of(member);
  }

  // add new member
  addMember(member: Member): Observable<boolean> {
    let status: boolean = false;
    try {
      MEMBERS.push(member);
      status = true;
      this.messageService.add("Member added sucessfully!");
    }
    catch (e) {
      status = false;
      console.log(e);
      this.messageService.add("Something went wrong!");
    }
    return of(status);
  }

  // update member
  updateMember(index: number, member: Member): Observable<boolean> {
    let status: boolean;
    try {
      MEMBERS[index].firstname = member.firstname;
      MEMBERS[index].lastname = member.lastname;
      MEMBERS[index].salary = member.salary;
      status = true;
      this.messageService.add("Member updated sucessfully!");
    }
    catch (e) {
      status = false;
      console.log(e);
      this.messageService.add("Something went wrong!");
    }
    return of(status);
  }

  //delete member
  deleteMember(index: number): Observable<boolean> {
    let status: boolean;
    try {
      MEMBERS.splice(index,1);
      status = true;
      this.messageService.add("Member deleted sucessfully!");
    }
    catch (e) {
      status = false;
      console.log(e);
      this.messageService.add("Something went wrong!");
    }
    return of(status);
  }
}
