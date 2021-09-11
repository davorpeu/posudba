import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  email: string = ""
  password: string = ""
  register(){
 this.userService.register(this.email, this.password)

  }
}
