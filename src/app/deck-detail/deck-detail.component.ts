import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_shared/services/api.service';
import { Deck } from '../_models/deck.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.less']
})
export class DeckDetailComponent implements OnInit {

  private readonly deckUrl = "/decks"
  deck: Deck = new Deck()

  constructor(
    private _api: ApiService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(p => {
      const {id} = p  
      //console.log(p)
      if(!id) return
      this._api
          .getDeck(id)
          .then(d => this.deck = d)
    })
  }

  onSend() {
    this._api[this.deck.id ? 'putDeck' : 'postDeck'](this.deck)
      .then(() => {
        //afegir alert de success al crear.
        this._router.navigateByUrl(this.deckUrl)
      })
  }

}
