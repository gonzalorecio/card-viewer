import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import User from '../../_models/user.model';


@Injectable()
export class ApiService {

  private readonly apiUrl = "/api"

  constructor(
    private _http: HttpClient
  ) { }

  signin(user: User): Promise<any>{
    return this._http.post(this.apiUrl+"/auth/signin", user).toPromise();
  }

}
