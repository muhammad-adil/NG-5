import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpModule , Http } from '@angular/http';

import { routing, appRoutingProviders }  from './app.routes';


import { PostService } from './post.service';
import { CommentsService } from './comments.service';
//Angular Material
import 'hammerjs';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule,
    routing
  ],
  // providers: [],
  providers: [
    appRoutingProviders, PostService, CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
