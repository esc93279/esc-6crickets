import { createAction, props } from '@ngrx/store';

export const getDeadline = createAction('[Deadline] Get Deadline');

export const getDeadlineSuccess = createAction(
  '[Deadline] Get Deadline Success',
  props<{ deadline: number }>()
);

export const getDeadlineFailure = createAction(
  '[Deadline] Get Deadline Failure',
  props<{ error: Error }>()
);
