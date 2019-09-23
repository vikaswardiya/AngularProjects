import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  users:object;

  constructor(private data: DataService) { }


  firstclick() {
    this.data.getUsers().subscribe(data=>{
      this.users=data;
      console.log(this.users);

    });
  }
  ngOnInit() {
  }

}
