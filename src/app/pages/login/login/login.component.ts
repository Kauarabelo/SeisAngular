import { LoginClass } from './login-class';
import { Component, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new LoginClass());
  }

  createForm(login: LoginClass) {
    this.formLogin = this.formBuilder.group({
      email: [login.email],
      senha: [login.senha],
    })
  }

  onSubmit(){
    console.log(this.formLogin.value);

    this.createForm(new LoginClass());
  }

}

export class Login {
 }

