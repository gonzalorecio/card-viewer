import { Component, OnInit } from '@angular/core';
import { Deck } from '../_models/deck.model';
import { ApiService } from '../_shared/_services/api.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.less']
})
export class DecksComponent implements OnInit {

  decks: Deck[] = []

  isLoading = true


  constructor(
    private _api: ApiService,
    private _router: Router,
    private _route: ActivatedRoute

  ) { }

  ngOnInit() {
    this._api
        .getDecks()
        .then(d => {this.
          decks = d
          this.isLoading = false
        })
        .catch(error => {
          console.log(error)
        })
  }

  onDeleteDeck(id: string){
    this._api.deleteDeck(id)
        .then(() => {
          const i = this.decks.findIndex(d =>  d.id == id)
          this.decks.splice(i, 1)
        })
    event.stopPropagation()

  }

  onEditDeck(id: string) {
    this._router.navigateByUrl("/deck/")
  }
}
