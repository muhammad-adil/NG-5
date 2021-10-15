import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakersListComponent } from './speakers/speakers-list/speakers-list.component';
import { BioComponent } from './speakers/bio/bio.component';
//  ! Found component 
import { NotFoundComponent } from './not-found/not-found.component';

export const App_Routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'speakers', component: SpeakersComponent, children: [
    { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
    { path: ':id', component: BioComponent, outlet: 'bio' }
  ] },
  { path: '**',      component: NotFoundComponent },
    //Redirect to Home
      { path: '', redirectTo: '/home', pathMatch: 'full'}
];

// [
// //     { path: '',        component: HomeComponent, data: { preload: true } },
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'speakers', component: SpeakersComponent, children: [
//     { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
//     { path: ':id', component: BioComponent, outlet: 'bio' }
//   ] },
//     { path: '**',      component: NotFoundComponent },
//   //Redirect to Home
//     { path: '', redirectTo: '/home', pathMatch: 'full'}

// ];

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { SpeakersComponent } from './speakers/speakers.component';
// import { SpeakersListComponent } from './speakers/speakers-list/speakers-list.component';
// import { BioComponent } from './speakers/bio/bio.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'speakers', component: SpeakersComponent, children: [
//     { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
//     { path: ':id', component: BioComponent, outlet: 'bio' }
//   ] },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   providers: []
// })
// export class RoutingModule { }
