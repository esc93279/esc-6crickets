import { Injectable } from '@angular/core';
import { Observable, delay, map, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeadlineService {
  constructor() {}
  /**
   * modify the deadlineMinutes here to set the deadline
   */

  deadlineMinutes = 2;

  // mock http call to api/deadline
  getDeadline(): Observable<number> {
    return of(this.deadlineMinutes).pipe(delay(500));
  }
}
