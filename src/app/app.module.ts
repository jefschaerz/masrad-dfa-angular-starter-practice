import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DiaLogComponent } from './components/dia-log/dia-log.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [AppComponent, MessageComponent, DiaLogComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
