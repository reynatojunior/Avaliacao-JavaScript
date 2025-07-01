import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'sobre',
        loadComponent: () => import('./pages/sobre/sobre.component').then(m => m.SobreComponent)
    },
    {
        path: 'contato',
        loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent)
    }
];
