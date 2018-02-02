import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_shared/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  private readonly loginUrl = "/login"
  
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onLogout(){
    this._auth.logout()
    console.log(this._auth.isLogged)
    this._router.navigateByUrl(this.loginUrl)
  }

}
