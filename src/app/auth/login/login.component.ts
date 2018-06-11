import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;

  constructor(
    private service: AuthService,
    private builder : FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.builder.group({
      user: [null,Validators.required],
      password:[null,Validators.required],
      //remember : [false]
    })
  }

  login(){
    this.service.login(
      this.form.get('user').value,
      this.form.get('password').value);
  }

}
