import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('@helderberg-pirates-baseball/lazy-features/home').then((m) => m.lazyFeaturesHomeRoutes),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
