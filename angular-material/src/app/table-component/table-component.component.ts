import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {TableService} from '../table.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})

export class TableComponentComponent implements OnInit {

  constructor(private tableservices:TableService) { }

 // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['name', 'currency','type','Date','purpose',"Amount"];

  dataSource = new MatTableDataSource(this.tableservices.ELEMENT_DATA);
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  

  ngOnInit() {
    console.log("dataSource--> ",this.dataSource);
   
    this.dataSource.sort = this.sort;
  }

}
