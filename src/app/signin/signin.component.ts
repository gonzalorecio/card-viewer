import { Component } from '@angular/core';
import User from "../_models/user.model";
import {ApiService} from "../_shared/services/api.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent {
  user: User = new User();
  passwordRepeat: string = ''
  isLoading = false

  constructor(
    private _api: ApiService,
    private _router: Router 
  ) { }

  onSend(){
    this.isLoading = true
    //console.log(this.user);
    this._api
        .signin(this.user)
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

  isFormSendable(isValid){
    return isValid || !this.arePasswordsEqual() && !this.isLoading

  }

  arePasswordsEqual(){
    return this.user.password == this.passwordRepeat
  }

}
