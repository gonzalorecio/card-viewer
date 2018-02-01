import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { CookieService } from "ng2-cookies";
import { routes } from "./routes";
import { SigninComponent } from './signin/signin.component';
import { ApiService } from './_shared/_services/api.service';
import { AuthService } from './_shared/_services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    ApiService,
    AuthService,
    CookieService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
