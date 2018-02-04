import { Component, OnInit, ViewChild } from '@angular/core';
import { Card } from '../_models/card.model';
import { ApiService } from '../_shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppPopupComponent } from '../_shared/components/app-popup/app-popup.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit {

  private createCardUrl = "";

  private cards: Card[];
  private deckId: string;
  private deckName: string;
  private cardToDelete: string;
  private isLoading = true;
  
  constructor(
    private _api: ApiService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  @ViewChild('deletePopup') deletePopup: AppPopupComponent

  ngOnInit() {
    this._route.params.subscribe(p => {
      const { deck_id } = p
      console.log(p)
      if (!deck_id) return
      this.deckId = deck_id;// 1042;//this._route.params._value.id
      this._api.getDeck(this.deckId)
          .then(d => this.deckName = d.title)
        .catch(e => console.log(e))
      this._api.getCards()
          .then(cards => {
            this.cards = cards.filter(c => c.deck_id==this.deckId)

            this.isLoading = false
          })
          .catch(e=>console.log(e))
    })
    this.createCardUrl = "/decks/"+this.deckId+"/card/create"
    //this.cardsUrl = "/decks/"+this.deckId+"/card/"
  }

  onDeleteCard(id: string, event: MouseEvent) {
    this.deletePopup.openPopup()
    this.cardToDelete = id
    event.stopPropagation()
  }

  onEdit() {
    event.stopPropagation()
  }


  onAcceptDelete() {
    this._api.deleteCard(this.cardToDelete)
      .then(() => {
        const i = this.cards.findIndex(c => c.id == this.cardToDelete)
        this.cards.splice(i, 1)
      })
  }

}
