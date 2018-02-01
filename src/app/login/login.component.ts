import { Component } from '@angular/core';
import { log } from 'util';
import { ApiService } from '../_shared/_services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  readonly minLengthPassword = 6

  email: string  = "" //= "gonredo@gmail.com"
  password: string = ""
  isLoading = false

  constructor(
    private _api: ApiService,
    private _router: Router
  ) { }

  onSend() {
    this.isLoading = true
    //console.log(this.user);
    this._api
      .login(this.email, this.password)
      .then(response => {
        //el server ens respon
        console.log(response)
        this.isLoading = false
        this._router.navigateByUrl("/")
      })
      .catch(error => {
        console.log(error)
        this.isLoading = false
      })
  }

  onCheckPassword(){
    //console.log(this.password)
    return this.password.length >= this.minLengthPassword
  }

}
