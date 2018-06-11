import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import { Observable } from 'rxjs/Rx';
// import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: string, password: string){
    this.http.post('http://localhost:8080/api/auth/login',
                  new HttpParams()
                    .set('user', user)
                    .set('password', password)
                    .toString()
                    ,{headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
                      responseType: 'text'}
    ).subscribe(res =>{
      localStorage.setItem("COND_TOKEN",res);
      this.router.navigateByUrl('');
    },e =>{
      alert(e.error);
    });
  }

}
