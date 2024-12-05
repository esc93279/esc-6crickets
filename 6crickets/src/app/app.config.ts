import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { deadlineReducer } from './+state/deadline.reducer';
import { DeadlineEffects } from './+state/deadline.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(deadlineReducer),
    provideEffects(DeadlineEffects),
    provideState('deadline', deadlineReducer),
  ],
};
