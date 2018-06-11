import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HttpModule } from '@angular/http';
import { AppDirectiveModule } from '../core/app-directive-module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppDirectiveModule,
    HttpModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [AuthGuard, AuthService]
})
export class AuthModule { }
