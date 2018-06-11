import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean> | boolean {
      if(localStorage.getItem("COND_TOKEN")){
        return true;
      }
      console.log('yet not loged');
      this.router.navigate(['/login'])
      return false;
    }
}
