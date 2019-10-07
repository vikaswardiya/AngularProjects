import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  // on filling "bookform"
  submitForm(form) {
    // stop here if form is invalid
    if (form.invalid) {                   
      localStorage.removeItem('login');
      return;
    }
    else {
      localStorage.setItem('login', JSON.stringify(form.value));
      this.router.navigate(['customer/bookroom']);
    }
  }

  // clear login from 
  clearall(form) {
    form.reset();
    form.controls.username.errors.required = false;
    form.controls.password.errors.required = false;
    localStorage.removeItem('login');
  }

  // Logout user
  logout() {
    localStorage.removeItem('login');
    this.router.navigate(['']);
  }

}
