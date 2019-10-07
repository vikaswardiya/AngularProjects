import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['city', 'date', 'emailid', 'mobile',"name" ,"note","roomno"];
  dataSource = new MatTableDataSource(JSON.parse(localStorage.getItem('userdata')));

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    if (localStorage.getItem('userdata')) {
      console.log("dataSource--> ", this.dataSource);
      this.dataSource.sort = this.sort;
    }
  }
}
