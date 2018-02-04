import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import User from '../../_models/user.model';
import {Deck} from '../../_models/deck.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Card } from '../../_models/card.model';
//import { HttpBackend } from '@angular/common/http/src/backend';


@Injectable()
export class ApiService {

  private readonly apiUrl = "/api"

  private readonly loginUrl = "/login"

  constructor(
    private _http: HttpClient,
    private _auth: AuthService,
    private _router: Router
  ) { }

  signin(user: User): Promise<any>{
    return this._http.post(this.apiUrl+"/auth/signin", user).toPromise();
  }

  login(email:string, password: string): Promise<any>{
    return this._http.post(
      this.apiUrl+'/auth/login',
      {email, password}
    ).toPromise()
  }

  getDecks(): Promise<any> {
    //this.
    if (!this._auth.isLogged){
      console.log("getDecks not logged")
      //this._router.navigateByUrl("/login")
      return
    }
    else{
      console.log("getDecks logged")
      //this._router.navigateByUrl("/login")
    }
    return this._http
               .get(this.apiUrl+'/decks')
               .toPromise()
               .catch(e => this.handleError(e))
  }


  /************* DECKS **************/

  deleteDeck(id: string): Promise<any> {
    return this._http 
               .delete(this.apiUrl+'/decks/'+id)
               .toPromise()
               .catch(e => this.handleError(e)) 
  }

  postDeck(deck: Deck): Promise<any>{
    return this._http
               .post(this.apiUrl+'/decks', deck)
               .toPromise()
               .catch(e => this.handleError(e))
  }

  getDeck(id: string): Promise<any> {
    return this._http
               .get(this.apiUrl+"/decks/"+id)
               .toPromise()
               .catch(e => this.handleError(e))
  }

  putDeck(deck:Deck): Promise<any> {
    return this._http.put(this.apiUrl + '/decks/' + deck.id, deck)
      .toPromise()
      .catch(e => this.handleError(e))
  }


  /**************** CARDS ******************/

  getCards(): Promise<any> {
    return this._http
               .get(this.apiUrl+'/cards')
               .toPromise()
               .catch(e => this.handleError)
  }

  getCard(id: string): Promise<any> {
    return this._http
      .get(this.apiUrl + "/cards/" + id)
      .toPromise()
      .catch(e => this.handleError(e))
  }

  postCard(card: Card): Promise<any> {
    return this._http
      .post(this.apiUrl + '/cards', card)
      .toPromise()
      .catch(e => this.handleError(e))
  }

  putCard(card: Card): Promise<any> {
    return this._http.put(this.apiUrl + '/cards/' + card.id, card)
      .toPromise()
      .catch(e => this.handleError(e))
  }

  deleteCard(id: string): Promise<any> {
    return this._http
      .delete(this.apiUrl + '/cards/' + id)
      .toPromise()
      .catch(e => this.handleError(e))
  }



  private handleError(e) {
    if (e.status === 401) { //unauthorised
      console.log("Unauthorised")
      this._auth.logout()
      this._router.navigateByUrl(this.loginUrl)
    }
    else {
      console.log("My error handler:")
      console.log(e)
    }
  }

  
}
