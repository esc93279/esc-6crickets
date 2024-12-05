import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DeadlineState, DEADLINE_KEY } from './deadline.reducer';

const getDeadlineState = createFeatureSelector<DeadlineState>(DEADLINE_KEY);

export const getDealineLoaded = createSelector(
  getDeadlineState,
  (state: DeadlineState) => state.loading
);

export const getDeadlineSelector = createSelector(
  getDeadlineState,
  (state: DeadlineState) => state.deadline
);

export const getDeadlineError = createSelector(
  getDeadlineState,
  (state: DeadlineState) => state.error
);
