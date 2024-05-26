import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import("./components/layout/layout.routes").then(m => m.LAYOUT_ROUTES)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
