import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { reject } from 'lodash';
import { Alignment, Message } from 'src/app/models/message';

@Component({
  selector: 'app-dia-log',
  templateUrl: './dia-log.component.html',
  styleUrls: ['./dia-log.component.scss']
})
export class DiaLogComponent implements OnInit {
  @Input() messages: Message[];
  newMessage: Partial<Message>;

  constructor() {}

  ngOnInit(): void {
    this.initNewMessage();
  }

  changeAlignment(alignment: Alignment) {
    this.newMessage.alignment = alignment;
  }

  onMessageRemoved(msgId: number): void {
    this.messages = reject(this.messages, { id: msgId });
  }

  sendNewMessage(form: FormGroup) {
    if (form.invalid) {
      form.controls.content.markAsTouched();
    } else {
      this.newMessage.postedAt = new Date();
      this.newMessage.id = this.messages[this.messages.length - 1].id + 1;
      this.messages.push(this.newMessage as Message);
      this.initNewMessage();
      form.reset();
    }
  }

  private initNewMessage() {
    this.newMessage = {
      content: '',
      postedBy: 'me',
      read: true,
      alignment: 'left'
    };
  }
}
