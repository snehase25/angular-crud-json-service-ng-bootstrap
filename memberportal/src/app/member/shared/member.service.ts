import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageConstants } from '../../shared/components/message/shared/message.constants';
import { MessageService } from '../../shared/services/message.service';
import { Member } from './member.model';
import { MEMBERS } from './mock-members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private isSuccess: boolean = true;
  constructor(private messageService: MessageService, private messageConstants: MessageConstants) { }

  // Get all members
  getAll(): Observable<Member[]> {
    const members = of(MEMBERS);
    return members
      .pipe(catchError(this.errorHandler));
  }

  // Get a member from index
  find(index: number): Observable<Member> {
    const member = MEMBERS[index];
    return of(member)
      .pipe(catchError(this.errorHandler));
  }

  // Add new member
  create(member: Member): Observable<boolean> {
    MEMBERS.push(member);
    this.setAlertMessage(this.messageConstants.CREATESUCCESS, this.isSuccess);
    return of(this.isSuccess)
      .pipe(catchError(this.errorHandler));
  }

  // Update member
  update(index: number, member: Member): Observable<boolean> {
    MEMBERS[index].firstName = member.firstName;
    MEMBERS[index].lastName = member.lastName;
    MEMBERS[index].salary = member.salary;
    this.setAlertMessage(this.messageConstants.UPDATESUCCESS, this.isSuccess);
    return of(this.isSuccess)
      .pipe(catchError(this.errorHandler));
  }

  // Delete member
  delete(index: number): Observable<boolean> {
    MEMBERS.splice(index, 1);
    this.setAlertMessage(this.messageConstants.DELETESUCCESS, this.isSuccess);
    return of(this.isSuccess)
      .pipe(catchError(this.errorHandler));
  }

  // Handles the errors accross all service methods
  private errorHandler(error: any) {
    let errorMessage = '';
    this.isSuccess = false;
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      this.setAlertMessage(this.messageConstants.ERROR_CRUD, this.isSuccess)
    }
    return throwError(errorMessage);
  }

  // Set alert messages to notify user
  private setAlertMessage(message: string, isSuccess: boolean) {
    this.messageService.add(message, isSuccess);
  }
}
