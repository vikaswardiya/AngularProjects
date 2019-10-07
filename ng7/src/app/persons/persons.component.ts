import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})

export class PersonsComponent implements OnInit, OnDestroy {

  personsList: string[];
  users:object;
  isLoaded:boolean=false;
  private personServiceSubs: Subscription;
  constructor(private prsnServices: DataService) {
    //this.personsList=prsnServices.persons;
  }

  onremovePerson(prnName: string) {
    this.prsnServices.removePerson(prnName);
  }

  ngOnInit() {
    //this.personsList = this.prsnServices.persons;
    this.personServiceSubs = this.prsnServices.personChanged.subscribe(persons => {
    this.personsList = persons
    });
    console.log("this.personsList",this.personsList);
    this.prsnServices.getUsers().subscribe(data=>{
      this.users=data;
      this.isLoaded=true;
      console.log("isLoaded",this.isLoaded);
      console.log(this.users);
  });
}

  ngOnDestroy() {
    this.personServiceSubs.unsubscribe();
  }

}
