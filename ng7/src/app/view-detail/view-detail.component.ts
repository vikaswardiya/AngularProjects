import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {

  //  personsList: string[];
  users: string;
  isLoaded: boolean = false;
  private personServiceSubs: Subscription;
  constructor(private prsnServices: DataService, private route: ActivatedRoute) {
    //this.personsList=prsnServices.persons;
  }




  ngOnInit() {
    this.route.paramMap.subscribe(params => {
   //   alert(params.get('id'));
      this.prsnServices.getUsersbyId(parseInt(params.get('id'))).subscribe(data => {
        this.users = data['data']; //JSON.stringify(data['data']);
        this.isLoaded = true;
        console.log("isLoaded", this.isLoaded);
        console.log(this.users);
      });
    });
  }

}
