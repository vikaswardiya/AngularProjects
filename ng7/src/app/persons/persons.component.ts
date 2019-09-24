import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})

export class PersonsComponent implements OnInit {

  personsList: string[];
  //private personService: DataService;

  constructor(private prsnServices: DataService) 
  {
    //this.personsList=prsnServices.persons;
  }

  ngOnInit() {
    this.personsList = this.prsnServices.persons;
  }

}
