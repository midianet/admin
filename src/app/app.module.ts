import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './core/app-routing.module';
import { ResidentModule } from './resident/resident.module';
import { AppDirectiveModule } from './core/app-directive-module';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';
// LTE Modules
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthModule } from './auth/auth.module';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    MenuComponent,
    Error404Component,
    HomeComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    ResidentModule,
    AppDirectiveModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  exports: [AppDirectiveModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
