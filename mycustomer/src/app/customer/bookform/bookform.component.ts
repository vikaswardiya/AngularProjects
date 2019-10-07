import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../validation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {
  bookingform: FormGroup;
  submitted: boolean = false;
  password: string = "";
  username: string = "";
  durationInSeconds: number = 2;
  userformdata: string;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit() {

    this.bookingform = this.fb.group({
      name: ['', [Validators.required, ValidationService.stringValidator]],
      emailid: ['', [Validators.required, ValidationService.emailValidator]],
      mobile: ['', [Validators.required, ValidationService.mobileValidator]],
      roomno: ['', Validators.required],
      date: ['', Validators.required],
      city: ['', Validators.required],
      note: ['']
    });
  }

  get f() {
    return this.bookingform.controls;
  }

  clearall() {
    this.bookingform.reset();
    this.bookingform = this.fb.group({});
  }

  submitForm() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.bookingform.invalid) {
      return;
    }
    else {
      console.log("Valid Data Form", this.bookingform.value);
      this.userformdata = JSON.stringify(this.bookingform.value);
      console.log("userdata", localStorage.getItem('userdata'));
      /// if userdata key is present in local storage
      if (localStorage.getItem('userdata')) {
        let b = JSON.parse(localStorage.getItem('userdata'));
        b.push(this.bookingform.value);
        localStorage.setItem('userdata', JSON.stringify(b));
      }
      /// if userdata key is not present in local storage
      else {
        let a = [];
        a.push(JSON.parse(JSON.stringify(this.bookingform.value)));
        localStorage.setItem('userdata', JSON.stringify(a));
      }
      // Raise a Toast to confirm booking
      this._snackBar.open(`Room is booked for ${this.bookingform.value.name}`, 'Undo', {
        duration: 1000
      });
    }
    //this.service.submitForm(this.loginform.value);
  }

}
