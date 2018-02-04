import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { RouterModule } from '@angular/router';
import { DecksComponent } from '../decks/decks.component';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: ":id", component: CardsComponent },
    ]),
    CommonModule,
    SharedModule
  ],
  declarations: [CardsComponent]
})
export class CardsModule { }
