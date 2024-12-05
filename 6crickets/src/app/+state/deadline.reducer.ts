import { Action, createReducer, on } from '@ngrx/store';
import {
  getDeadline,
  getDeadlineSuccess,
  getDeadlineFailure,
} from './deadline.action';

export const DEADLINE_KEY = 'deadline';

export interface DeadlineState {
  loading: boolean;
  deadline?: number;
  error?: Error;
}

export const deadlineInitialState = {
  loading: false,
};

export const reducer = createReducer(
  deadlineInitialState,
  on(getDeadline, (state) => ({
    loading: true,
  })),
  on(getDeadlineSuccess, (state, { deadline }) => ({
    loading: false,
    deadline,
  })),
  on(getDeadlineFailure, (state, { error }) => ({
    loading: false,
    error,
  }))
);

export function deadlineReducer(
  state: DeadlineState | undefined,
  action: Action
) {
  return reducer(state, action);
}
