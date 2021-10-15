import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


export const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent }
];