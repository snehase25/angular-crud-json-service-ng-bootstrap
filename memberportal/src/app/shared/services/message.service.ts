import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public message: string = "";

  constructor() { }

  public add(message: string): void {
    this.message = message;
  }
}