import { Route } from '@angular/router';

const outlets: Route[] = [
  {
    outlet: 'header',
    path: '',
    loadComponent: () => import('./header/header.component').then((m) => m.HeaderComponent),
  },
  {
    outlet: 'footer',
    path: '',
    loadComponent: () => import('./footer/footer.component').then((m) => m.FooterComponent),
  },
];

export const appRoutes: Route[] = [
  ...outlets,
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
