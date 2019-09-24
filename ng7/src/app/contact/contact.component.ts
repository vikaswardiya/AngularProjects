import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  @Input() personsList:string[];
  constructor() { }

  ngOnInit() {
    console.log("Persons LIst in Contact Component from Persons Component",this.personsList);
  }

}
