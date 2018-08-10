import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ChurchService } from '../services/domain/church.service';
import { ChurchesComponent } from './components/churches/churches.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { HomeComponent } from './components/layout/home/home.component';
import { ChurchItemComponent } from './components/churches/church-item/church-item.component';
import { SigninUserComponent } from './components/signin-user/signin-user.component';
import { AuthService } from '../services/auth.service';
import { ProfileComponent } from './components/profile/profile.component';
import { StorageService } from '../services/storage.service';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ChurchesComponent,
    NavBarComponent,
    HomeComponent,
    ChurchItemComponent,
    SigninUserComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [
    ChurchService,
    AuthService,
    StorageService,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
