import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  personChanged = new Subject<string[]>();
  employeePageDirty;
  persons: string[] = ['Max', 'vikas', 'rishabh'];


  isAdminRigths(): boolean {
    return true;
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  getUsersbyId(id:number) {
    return this.http.get('https://reqres.in/api/users/'+id);
  }



  addPerson(person: string) {
    this.persons.push(person);
    this.personChanged.next(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name
    });

    this.personChanged.next(this.persons);
    console.log(this.persons, name);
  }

}
