import { Routes } from '@angular/router';
import path from 'path';
import { HomeApi } from './ApiUsefolder/home/home';
import { User } from './ApiUsefolder/user/user';
import { MainLayoutComponent } from './layouts/mainLayoutsComponents';
import { AboutApi } from './ApiUsefolder/about/about';
import { Login } from './login/login';

export const routes: Routes = [
    // { path: 'homeApi', component: HomeApi },

    {
        path: 'details',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'homeApi', pathMatch: 'full' },
            { path: 'login', component: Login },
            { path: 'user', component: User },
            { path: 'homeApi', component: HomeApi },
            { path: 'aboutApi', component: AboutApi }
        ]
    },
    { path: '**', redirectTo: 'details' }
];
