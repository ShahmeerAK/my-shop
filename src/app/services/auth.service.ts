import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword,signOut, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { loginForm, registerForm } from '../components/types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;
  

  constructor(private router:Router) { }
  
  login(form: loginForm) { 
    if (this.isLoading)
      return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        this.isAuthenticated = true;
        this.router.navigate([''])
        // ...
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      }).finally(() => (this.isLoading = false));
  }
  
  register(form: registerForm) {
    if (this.isLoading)
      return;
    this.isLoading = true;
    if (form.password != form.confirmPassword) {
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        this.isAuthenticated = true;
        // ...
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      }).finally(() => (this.isLoading = false));
  }
    logout(){
      const auth = getAuth();
      signOut(auth).then(() => {
        this.router.navigate(['login']);
        this.isAuthenticated = false;
      }).catch((error) => {
        
      })
    }
}
