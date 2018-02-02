import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about.component"
import { RouterModule } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "", component: AboutComponent}
    ]),
    //SharedModule
    CommonModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
