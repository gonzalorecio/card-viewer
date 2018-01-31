import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "", component: LoginComponent}
    ]),
    FormsModule,
    CommonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
