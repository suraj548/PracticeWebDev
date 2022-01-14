import { UserService } from 'src/app/user-data.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private uServ:UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){

    let tokenizedRequest=req.clone({

      setHeaders:{
        Authorization:`Bearer ${this.uServ.getToken()}` 
      }
    })
     return next.handle(tokenizedRequest) 
  }

}
 