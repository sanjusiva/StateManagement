import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter,withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { detailsReducer } from './store/lookupStore/lookup.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ data: detailsReducer }),
    provideRouter(routes, withViewTransitions()),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay())
  ]
};
