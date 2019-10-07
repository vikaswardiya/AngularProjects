import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from './data.service';
//import { truncate } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  
  constructor(private userservice:DataService , private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    console.log("CanActivate",this.userservice.isAdminRigths);
      if(this.userservice.isAdminRigths()){
        return true;
      }
      else{
        alert("Not Authorized user");
        this.router.navigate(['']);
      }
  }
  
}
