import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  { 
    path: 'details/:id',
    loadComponent: () => import('./details/details.page').then(m => m.DetailsPage)
  }
];
