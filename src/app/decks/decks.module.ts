import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecksComponent } from './decks.component';
import { CardsComponent } from '../cards/cards.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppPopupComponent } from '../_shared/components/app-popup/app-popup.component';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "", component: DecksComponent},
      //{ path: ":id", loadChildren: './cards/cards.module#CardsModule'},
    ]),
    FormsModule,
    CommonModule,
    SharedModule
  ],
  declarations: [DecksComponent]
})
export class DecksModule { }
