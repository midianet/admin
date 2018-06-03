import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidentListComponent } from './resident-list/resident-list.component';
import { ResidentService } from './resident.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ResidentListComponent],
  declarations: [ResidentListComponent],
  providers: [ResidentService]
})
export class ResidentModule { }
