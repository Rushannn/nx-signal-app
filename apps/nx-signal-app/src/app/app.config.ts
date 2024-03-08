import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { API_URL } from '@core/http-client';
import { environment } from '../environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full',
      },
      {
        path: 'search',
        loadComponent: () => import('@gh-users/users-search').then((m) => m.UsersSearchComponent),
      },
    ]),
    provideHttpClient(), provideAnimationsAsync(),
    { provide: API_URL, useValue: environment.api_url },
  ],
};
