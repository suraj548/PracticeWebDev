import { UserService } from 'src/app/user-data.service';
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private userser:UserService,private router:Router){

  }
  canActivate():boolean {
    if(this.userser.loggedIn()){
      return true
    }
    else{
      alert("Unauthorized Request ,Please Login")
      this.router.navigate(['/login'])
      return false
    }
      
  }
  
}
