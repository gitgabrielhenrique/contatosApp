import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'c1',
    loadComponent: () => import('./c1/c1.page').then( m => m.C1Page)
  },
  {
    path: 'c2',
    loadComponent: () => import('./c2/c2.page').then( m => m.C2Page)
  },
  {
    path: 'c3',
    loadComponent: () => import('./c3/c3.page').then( m => m.C3Page)
  },
  {
    path: 'c4',
    loadComponent: () => import('./c4/c4.page').then( m => m.C4Page)
  },
  {
    path: 'c5',
    loadComponent: () => import('./c5/c5.page').then( m => m.C5Page)
  },
];
