import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDeadline } from './deadline.action';
import { Observable } from 'rxjs';
import { getDeadlineSelector } from './deadline.selector';

@Injectable({
  providedIn: 'root',
})
export class DeadlineFacade {
  constructor(private _store: Store) {}

  deadline$: Observable<number | undefined> =
    this._store.select(getDeadlineSelector);

  getDeadline() {
    this._store.dispatch(getDeadline());
  }
}
