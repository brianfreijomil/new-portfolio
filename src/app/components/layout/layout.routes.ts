import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const LAYOUT_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full'
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        pathMatch: 'full'
    },
    {
        path: 'technologies',
        component: TechnologiesComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];