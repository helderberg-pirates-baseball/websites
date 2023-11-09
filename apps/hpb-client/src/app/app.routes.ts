import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('@helderberg-pirates-baseball/pages/landing').then((m) => m.pagesLandingRoutes),
  },
  {
    path: '**',
    loadComponent: () => import('@helderberg-pirates-baseball/pages/not-found').then((m) => m.NotFoundComponent),
  },
];
