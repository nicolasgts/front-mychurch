import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { ChurchesComponent } from './components/churches/churches.component';
import { HomeComponent } from './components/layout/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';


const AppRoutes: Routes = [
    { path: '', component: HomeComponent, children: [
        { path: '', component: ChurchesComponent},
        { path: 'profile', component: ProfileComponent}
    
    ]},
    
  ];
//   {path: 'login', component: LoginComponent},
//   {path: '', canActivate: [AuthGuard], component: HomeComponent, children: [
//       {path: 'clientes', component: ClientesComponent},
//       {path: 'cliente/:id', component: ClienteFormComponent},
//       {path: 'perfil', component: PerfilComponent},
//       {path: 'personais', component: PersonaisComponent},
//       {path: 'personal/:id', component: PersonalFormComponent}
//     ]


export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);