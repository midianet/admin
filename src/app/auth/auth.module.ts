import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
// import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [AuthGuard, AuthService]
})
export class AuthModule { }
