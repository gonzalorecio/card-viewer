import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  readonly minLengthPassword = 6

  email: string //= "gonredo@gmail.com"
  password: string

  onSend() {
    console.log(this.email);
  }

  onCheckPassword(){
    console.log(this.password)
  }

}
