import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  persons:string[]=['Max','vikas','rishabh'];

  getUsers(){
    return this.http.get('https://reqres.in/api/users');
  }

  addPerson(person:string){
    this.persons.push(person);
  }

}
