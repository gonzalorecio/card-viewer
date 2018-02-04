import { Component, OnInit } from '@angular/core';
import { Deck } from '../_models/deck.model';
import { ApiService } from '../_shared/services/api.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { AppPopupComponent } from '../_shared/components/app-popup/app-popup.component';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.less']
})
export class DecksComponent implements OnInit {

  decks: Deck[] = []

  isLoading = true

  private deckToDelete: string

  constructor(
    private _api: ApiService,
    private _router: Router,
    private _route: ActivatedRoute

  ) { }

  @ViewChild('deletePopup') deletePopup: AppPopupComponent

  ngOnInit() {
    this._api
        .getDecks()
        .then(d => {
          this.decks = d
          console.log(d)
          this.isLoading = false
        })
        .catch(error => {
          console.log(error)
        })
  }

  onDeleteDeck(id: string, event: MouseEvent){
    //this._api.deleteDeck(id)
      //  .then(() => {
        //  const i = this.decks.findIndex(d =>  d.id == id)
        //  this.decks.splice(i, 1)
       // })
      this.deletePopup.openPopup()
      this.deckToDelete = id
      event.stopPropagation()

  }
  onEdit(){
    event.stopPropagation()
  }

  onAcceptDelete() {
    this._api.deleteDeck(this.deckToDelete)
        .then(() => {
          const i = this.decks.findIndex(d =>  d.id == this.deckToDelete)
          this.decks.splice(i, 1)
       })
  }
}
