import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  email: string = ""
  password: string = ""

  login(){
this.userService.login(this.email, this.password)

  }
}
