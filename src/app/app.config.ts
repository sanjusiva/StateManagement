import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { detailsReducer } from './store/lookupStore/lookup.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ counts: counterReducer }),
    provideStore({ data: detailsReducer }),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};
