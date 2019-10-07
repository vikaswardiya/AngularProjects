import { Injectable } from '@angular/core';
import { PeriodicElement } from './periodic-element';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  // ELEMENT_DATA: PeriodicElement[] = [
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // ];

  
  ELEMENT_DATA = [{
    "name": ["Ross"], "currency": "Dollars", "type": "cash", "Date": "30/09/2015", "purpose": "to buy a monkey" ,"Amount":1500
  },{
    "name": ["Joey"], "currency": "Dollars", "type": "cash", "Date": "28/09/2019", "purpose": "For Audition","Amount":150
  },{
    "name": ["Chandler"], "currency": "Yen", "type": "cash", "Date": "30/08/2019", "purpose": "For Monika","Amount":158
  },{
    "name": ["Pheobe"], "currency": "Dollars", "type": "Online", "Date": "10/08/2018", "purpose": "For Guitar","Amount":158
  },{
    "name": ["Monika"], "currency": "Dollars", "type": "Online", "Date": "10/07/2018", "purpose": "For Richard","Amount":152
  }];




  constructor() { }
}


