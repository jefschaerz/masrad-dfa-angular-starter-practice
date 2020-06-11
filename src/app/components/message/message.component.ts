import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Output() removed = new Subject<number>();
  class: 'warning' | 'success' = 'warning';

  constructor() {}

  ngOnInit(): void {
    if (this.message.postedBy === 'them') {
      this.class = 'success';
    }
  }

  remove(): void {
    this.removed.next(this.message.id);
  }
}
