import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiaLog } from '../models/dialog';
import { environment } from '../../environments/environment';
import { Message } from '../models/message';

@Injectable({ providedIn: 'root' })
export class DiaLogService {
  constructor(private http: HttpClient) {}

  fetchDiaLogs(): Observable<DiaLog[]> {
    return this.http.get<DiaLog[]>(`${environment.api}/dialogs`);
  }

  fetchMessages(dialogId: number): Observable<Message[]> {
    return this.http.get<Message[]>(
      `${environment.api}/dialogs/${dialogId}/messages`
    );
  }
}
