import { Injectable } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { Promise } from 'q';

@Injectable()
export class AuthService {

  private readonly cookieToken = 'api-token'

  constructor(
    private _cookies: CookieService
  ) { }

  isLogged(): boolean{
    console.log("Logged status: " + this._cookies.check(this.cookieToken))
    return this._cookies.check(this.cookieToken)
  }

  logout(){
    this._cookies.deleteAll()
  }

}
