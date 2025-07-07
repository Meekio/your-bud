import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', loadComponent: () => import('./pages/profile/profile').then(m => m.Profile) },
  { path: '**', redirectTo: '/profile' }
];
