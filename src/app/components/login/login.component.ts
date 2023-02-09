import { Component, OnInit } from '@angular/core';
import { loginForm } from '../types/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: loginForm = {
    email: '',
    password: ''
  }

  constructor(private authService:AuthService){ }
  ngOnInit():void{}
  submit() {
    
    this.authService.login(this.form)
    
  }
  isLoading() {
    return this.authService.isLoading;
  }
}
