import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SigninComponent } from "./signin.component";
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "", component: SigninComponent}
    ]),
    FormsModule,
    CommonModule
  ],
  declarations: [SigninComponent]
})
export class SigninModule { }
