import { Component } from '@angular/core';
import User from "../_models/user.model";
import {ApiService} from "../_shared/_services/api.service"
import { log } from 'util';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent {
  user: User = new User();
  passwordRepeat: string = ''
  constructor(
    private _api: ApiService
  ) { }

  onSend(){
    //console.log(this.user);
    this._api
        .signin(this.user)
        .then(response => {
          //el server ens respon
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
  }

  arePasswordsEqual(){
    return this.user.password == this.passwordRepeat
  }

}
