import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecksComponent } from './decks.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "", component: DecksComponent}
    ]),
    FormsModule,
    CommonModule
  ],
  declarations: [DecksComponent]
})
export class DecksModule { }
