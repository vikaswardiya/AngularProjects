import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  expenseForm: FormGroup;
  headElemnets: string[];
  elements;

  constructor(private service: ServicesService) { }
  ngOnInit() {
    this.expenseForm = this.service.expenseForm;
    this.headElemnets = this.service.headElements;
    console.log( "headElemnets",this.headElemnets);
    this.elements=this.service.elements;
  }
}
