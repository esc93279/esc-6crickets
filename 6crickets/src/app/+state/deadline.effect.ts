import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import {
  getDeadline,
  getDeadlineSuccess,
  getDeadlineFailure,
} from './deadline.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { DeadlineService } from '../services/deadline.service';

@Injectable({
  providedIn: 'root',
})
export class DeadlineEffects {
  constructor(
    private _actions$: Actions,
    private _deadlineService: DeadlineService
  ) {}

  getDeadline$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(getDeadline),
      switchMap(() =>
        this._deadlineService
          .getDeadline()
          .pipe(map((deadline) => getDeadlineSuccess({ deadline })))
      ),
      catchError((error: Error) => of(getDeadlineFailure({ error })))
    );
  });
}
