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
import { AuthService } from '../services/auth.service';
import { ProfileComponent } from './components/profile/profile.component';
import { StorageService } from '../services/storage.service';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor';
import { UserService } from '../services/domain/user.service';
import { AuthGuard } from './guards/auth.guards';


@NgModule({
  declarations: [
    AppComponent,
    ChurchesComponent,
    NavBarComponent,
    HomeComponent,
    ChurchItemComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ChurchService,
    StorageService,
    ErrorInterceptorProvider,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
