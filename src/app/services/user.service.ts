import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private storageService: StorageService, private router: Router) { }

  url: string = "http://localhost/posudba/login"
  register_url: string = "http://localhost/posudba/registracija"


  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);


  register(email: string, password: string) {
    let body = {
      "email": email,
      "password": password
    }
this.httpClient.post(this.register_url, body).subscribe((res: Array<User>) => {
if (res.length > 0) {

  this.currentUser.next(res[0]);
  this.storageService.setData("user",res[0]);

}
this.router.navigate(['/login']), { replaceUrl: true }
});
  }
  
  
  login(email: string, password: string) {
    let body = {
            "email": email,
            "password": password
          }
    this.httpClient.post(this.url, body).subscribe((res: Array<User>) => {
      if (res.length > 0) {

        this.currentUser.next(res[0]);
        this.storageService.setData("user",res[0]);

      }
      this.router.navigate(['/dashboard']), { replaceUrl: true }
    });

  }



}
