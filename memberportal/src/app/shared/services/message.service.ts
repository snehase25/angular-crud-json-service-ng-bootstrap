import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public message: string = "";
  public isSuccess: boolean = false;

  constructor() { }

  public add(message: string, isSuccess: boolean): void {
    this.message = message;
    this.isSuccess = isSuccess;
  }
}