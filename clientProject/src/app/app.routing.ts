
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent}  from './login/app.loginComponent'
import {RigistrationComponent } from './register/app.registrationComponent'
import {DashboardComponent} from './dashboard/dashboard.component'


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RigistrationComponent },
    {path: 'dashboard', component:DashboardComponent },
    {path:'register/id', component:RigistrationComponent},
   { path: '**', component: LoginComponent }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);