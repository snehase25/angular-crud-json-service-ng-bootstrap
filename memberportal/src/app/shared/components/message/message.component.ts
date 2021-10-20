import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @ViewChild('messageAlert', { static: false }) messageAlert!: NgbAlert;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    // Hide messages after 3 seconds
    setTimeout(() => this.messageAlert.close(), 3000);
  }
}
