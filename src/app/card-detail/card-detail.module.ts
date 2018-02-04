import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailComponent } from './card-detail.component'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [RouterModule.forChild([
    { path: "create", component: CardDetailComponent },
    { path: ':id', component: CardDetailComponent }

    ]),
    CommonModule,
    FormsModule
  ],
  declarations: [CardDetailComponent]
})
export class CardDetailModule { }
