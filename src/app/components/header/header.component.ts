import { Component, OnInit, AfterViewChecked, AfterViewInit, AfterContentChecked } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { User } from '../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked{

  constructor() { }

  user : User;

  ngOnInit() {
    this.readUser();
  }

  ngAfterContentChecked(){
    this.readUser();
  }

  readUser(){
    console.log('read');
    let token: string = localStorage.getItem("COND_TOKEN");
    if(token){
      let dec =  (jwt_decode(token));
      this.user = new User();
      this.user.login = dec.sub;
      this.user.name  = dec.name;
      this.user.cpf   = dec.cpf;
      this.user.email = dec.email;
      this.user.authorities = dec.authorities;
    }
  }

}
