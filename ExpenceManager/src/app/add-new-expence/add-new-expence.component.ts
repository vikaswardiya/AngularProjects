import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-expence',
  templateUrl: './add-new-expence.component.html',
  styleUrls: ['./add-new-expence.component.css']
})

export class AddNewExpenceComponent implements OnInit {

  constructor(private service: ServicesService, private fb: FormBuilder) {
    console.log("userdata -->", this.service.headElements);
  }
  submitted = false;
  myMsg: string;
  users: string[] = ["Ross", "Joey", "Chandler", "Pheobe", "Monika", "Rachel"];
  friend: string;
  mdbTableSort: string;
  sortBy: string;
  expenseForm: FormGroup;
  userdata;

  ngOnInit() {
    this.expenseForm = this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      Date: ['', Validators.required],
      currency: ['', Validators.required],
      Amount: ['', Validators.required],
      purpose: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.userdata = this.service.userdata;

  }


  get f() { return this.expenseForm.controls; }

  

  submitForm() {

    console.log(this.expenseForm);
    this.submitted = true;

    // stop here if form is invalid
    if (this.expenseForm.invalid) {
      return;
    }

    this.service.submitForm(this.expenseForm.value);
  }

  addTouserlist() {
    console.log(this.myMsg);
    if (this.myMsg !== undefined) {
      if (this.myMsg.trim().length !== 0) {
        this.users.push(this.myMsg);
      }
    }
  }
}
