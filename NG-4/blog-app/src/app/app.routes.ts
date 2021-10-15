import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'blog', component: BlogComponent },
  //{ path: 'post', component: PostComponent },
  { path: 'blog/post/:id', component: PostComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
