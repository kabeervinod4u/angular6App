import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent }  from './login/app.loginComponent';
import {RigistrationComponent } from './register/app.registrationComponent';

//mat
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule} from '@angular/material/checkbox';

import {ApiService} from './service/api.service';
import { DashboardComponent } from './dashboard/dashboard.component';
//kedn0
import { GridModule } from '@progress/kendo-angular-grid';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RigistrationComponent,
    DashboardComponent,
    

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,MatCheckboxModule,
    GridModule,
    ReactiveFormsModule



    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
