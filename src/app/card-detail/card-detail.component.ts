import { Component, OnInit } from '@angular/core';
import { Card } from '../_models/card.model';
import { ApiService } from '../_shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.less']
})
export class CardDetailComponent implements OnInit {

  private cardUrl = ""
  private deckId = ""
  private cardId = ""
  card: Card = new Card();
  constructor(
    private _api: ApiService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(p => {
      const { deck_id, id } = p
      console.log(p)
      this.deckId = deck_id
      this.card.deck_id = this.deckId
      if (!id || !deck_id) return
      this.cardId = id
      this._api
        .getCard(id)
        .then(c => this.card = c)
    })
    this.cardUrl = '/decks/'+this.deckId+"/cards"

  }

  onSend() {
    this._api[this.card.id ? 'putCard' : 'postCard'](this.card)
      .then(() => {
        //afegir alert de success al crear.
        this._router.navigateByUrl(this.cardUrl)
      })
  }

}
