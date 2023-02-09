import { Component, OnInit } from '@angular/core';
import { registerForm } from '../types/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form: registerForm={
  email: '',
  password: '',
  confirmPassword:''
  }
  
  
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    
  }
  submit() {
    this.authService.register(this.form);
  }
  isLoading() {
    return this.authService.isLoading;
  }
}
