import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'src/app/shared/services/message.service';
import { Member } from './member.model';
import { MEMBERS } from './mock-members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private messageService: MessageService) { }

  // get all members
  getAll(): Observable<Member[]> {
    const members = of(MEMBERS);
    return members
      .pipe(catchError(this.errorHandler));
  }

  // get a member from index
  find(index: number): Observable<Member> {
    const member = MEMBERS[index];
    return of(member)
      .pipe(catchError(this.errorHandler));
  }

  // add new member
  create(member: Member): Observable<boolean> {
    let status: boolean = false;
    MEMBERS.push(member);
    status = true;
    this.messageService.add("Member was added");
    return of(status)
      .pipe(catchError(this.errorHandler));
  }

  // update member
  update(index: number, member: Member): Observable<boolean> {
    let status: boolean = false;
    MEMBERS[index].firstName = member.firstName;
    MEMBERS[index].lastName = member.lastName;
    MEMBERS[index].salary = member.salary;
    status = true;
    this.messageService.add("Member was updated");
    return of(status)
      .pipe(catchError(this.errorHandler));
  }

  //delete member
  delete(index: number): Observable<boolean> {
    let status: boolean = false;
    MEMBERS.splice(index, 1);
    status = true;
    this.messageService.add("Member was deleted");
    return of(status)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      this.messageService.add('Something went wrong')
    }
    return throwError(errorMessage);
  }
}
