import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app.routes';
import { PLATFORM_ID } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { createStorage } from './storage.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideIonicAngular(),
    {
      provide: Storage,
      useFactory: createStorage,
      deps: [PLATFORM_ID],
    },
  ],
};
