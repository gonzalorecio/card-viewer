import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from "./not-found.component"

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "", component: NotFoundComponent}
    ]),
    CommonModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
