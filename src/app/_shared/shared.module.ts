import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPopupComponent } from './components/app-popup/app-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //HttpClientModule
  ],
  declarations: [
    AppPopupComponent,
    AlertComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    AppPopupComponent,
    AlertComponent
  ]
})
export class SharedModule { }
