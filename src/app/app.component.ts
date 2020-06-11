import { Component } from '@angular/core';
import { Message } from './models/message';
import { DiaLogService } from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DiaLog';
  messages: Message[];

  constructor(private dialogService: DiaLogService) {
    this.dialogService
      .fetchMessages(2)
      .subscribe((messages) => (this.messages = messages));
  }
}
