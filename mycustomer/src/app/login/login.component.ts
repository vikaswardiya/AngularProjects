import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  submitted: boolean = false;
  password: string = "";
  username: string = "";

  constructor(private fb: FormBuilder,private loginservice:LoginService) { }

  ngOnInit() {
    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  // return form controls status
  get f() {
    return this.loginform.controls;
  }

  clearall() {
   this.loginservice.clearall(this.loginform);
  }

  submitForm() {
    this.submitted = true;
    this.loginservice.submitForm(this.loginform);
  }

}
