import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  User,
} from 'firebase/auth';
import { loginForm, registerForm } from '../components/types/Auth';
import { firebaseConfig } from '../firebase.config';
import { FirebaseApp, FirebaseError, initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;
  currentUser: any = null;

  constructor(private router: Router) {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      (this.currentUser = user)
      console.log(this.currentUser);
    });
  }

  login(form: loginForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    firebase
      .auth()
      .setPersistence('local')
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(form.email, form.password)
          .then((userCredential) => {
            // Signed in
            this.currentUser = userCredential.user;
            this.isAuthenticated = true;
            this.router.navigate(['']);
            // ...
          })
          .catch((error) => {
            this.isAuthenticated = false;
            const errorCode = error.code;
            const errorMessage = error.message;
          })
          .finally(() => (this.isLoading = false));
      });
  }
  register(form: registerForm) {
    if (this.isLoading) return;
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
      })
      .finally(() => (this.isLoading = false));
  }
  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.router.navigate(['login']);
        this.isAuthenticated = false;
      })
      .catch((error) => {});
  }
}
