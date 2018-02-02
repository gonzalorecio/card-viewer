import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckDetailComponent } from './deck-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "create", component: DeckDetailComponent},
      { path: ':id', component: DeckDetailComponent }
      
    ]),
    CommonModule,
    FormsModule
  ],
  declarations: [DeckDetailComponent]
})
export class DeckDetailModule { }
