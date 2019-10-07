import { Component, OnInit } from '@angular/core';
//import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

 // options: FormGroup;

  constructor() {
    // this.options = fb.group({
    //   bottom: 0,
    //   fixed: false,
    //   top: 0
    // });
  }
  showFiller = false;
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  ngOnInit() {
  }

}
