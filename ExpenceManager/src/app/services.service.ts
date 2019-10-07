import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  headElements = ['name', 'currency','type','Date','purpose',"Amount"];
  userdata = [{
    "name": ["Ross"], "mobile":9858654785, "currency": "Dollars", "type": "cash", "Date": "30/09/2019", "purpose": "to buy a monkey" ,"Amount":1500
  },{
    "name": ["Joey"], "mobile":9856824785 ,"currency": "Dollars", "type": "cash", "Date": "28/09/2019", "purpose": "For Audition","Amount":1500
  },{
    "name": ["Chandler"],"mobile":985385475 , "currency": "Yen", "type": "cash", "Date": "30/08/2019", "purpose": "For Monika","Amount":1500
  },{
    "name": ["Pheobe"], "mobile":9876854785 ,"currency": "Dollars", "type": "Online", "Date": "10/08/2018", "purpose": "For Guitar","Amount":1500
  },{
    "name": ["Monika"],"mobile":9856854585 , "currency": "Dollars", "type": "Online", "Date": "10/07/2018", "purpose": "For Richard","Amount":1500
  }];

  elements=this.userdata;
  expenseForm: FormGroup;
  
  submitForm(value){
    console.log("--value--",value);
    this.userdata.push(value);
    console.log("Message",this.userdata);
  }
  constructor() { 
  }
}
