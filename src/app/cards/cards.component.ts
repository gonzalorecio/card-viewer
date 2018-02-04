import { Component, OnInit } from '@angular/core';
import { Card } from '../_models/card.model';
import { ApiService } from '../_shared/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit {

  private cards: Card[];
  private deckId: Number;
  private isLoading = true;
  
  constructor(
    private _api: ApiService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.deckId = 1042;//this._route.params._value.id
    this._api.getCards()
        .then(cards => {
          this.cards = cards.filter(c => c.deck_id===this.deckId)
          this.isLoading = false
        })
        .catch(e=>console.log(e))
  }


}
