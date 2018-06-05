import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ResidentListComponent } from './resident-list/resident-list.component';
import { ResidentFormComponent } from './resident-form/resident-form.component';
import { ResidentService } from './resident.service';
import { AppDirectiveModule } from '../core/app-directive-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    DataTablesModule,
    AppDirectiveModule
  ],
  exports: [ResidentListComponent, ResidentFormComponent],
  declarations: [ResidentListComponent, ResidentFormComponent],
  providers: [ResidentService]
})
export class ResidentModule { }
