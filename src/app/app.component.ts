import { Component, OnInit } from '@angular/core';
import AboutProject from "./_models/about-project.model"
import { Author } from "./_models/author.model"
import { SocialLink } from './_models/social-link.model';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from './_shared/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  private readonly loginUrl = "/login"
  private readonly signinUrl = "/signin"
  private readonly decksUrl = "/decks"
  private readonly aboutUrl = "/"
  private readonly notfoundUrl = "/404"
  
  constructor(
    private _router: Router,    
    private _auth: AuthService
  ){}
  
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._router
        .events
        .subscribe( event => {
          if (event instanceof NavigationStart){
            const { url } = event // equival a const url = event.url
            const isLogged = this._auth.isLogged()
            console.log("Ay")
            if (url === this.aboutUrl || url == this.notfoundUrl) return
            if (url === this.loginUrl || url === this.signinUrl){
              if (isLogged) this._router.navigateByUrl(this.decksUrl)
            }
            else if (!isLogged){
              console.log("Redirecting to login page")
              this._router.navigateByUrl(this.loginUrl)
            }
          }
        })
  }

}
