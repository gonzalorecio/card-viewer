import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckDetailComponent } from './deck-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "create", component: DeckDetailComponent},
      {path: "id"}
    ])
  ],
  declarations: [DeckDetailComponent]
})
export class DeckDetailModule { }
