
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { HomePage } from './home/home.page';
import { DetailsPage } from './details/details.page';
import { FavouritesPage } from './favourites/favourites.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'details/:id', component: DetailsPage },
  { path: 'favourites', component: FavouritesPage },
];

export const appRouterProviders = [provideRouter(routes)];


