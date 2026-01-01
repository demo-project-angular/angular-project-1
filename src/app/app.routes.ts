import { Routes } from '@angular/router';
import path from 'path';
import { HomeApi } from './ApiUsefolder/home/home';
import { User } from './ApiUsefolder/user/user';
import { MainLayoutComponent } from './layouts/mainLayoutsComponents';
import { AboutApi } from './ApiUsefolder/about/about';

export const routes: Routes = [
    // { path: 'homeApi', component: HomeApi },

    {
        path: 'details',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'homeApi', pathMatch: 'full' },
            { path: 'user', component: User },
            { path: 'homeApi', component: HomeApi },
            { path: 'aboutApi', component: AboutApi }
        ]
    },
    { path: '**', redirectTo: 'details' }
];
