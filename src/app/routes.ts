import {Routes} from "@angular/router"

export const routes: Routes = [
    {path: '', loadChildren: './about/about.module#AboutModule'},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'signin', loadChildren: './signin/signin.module#SigninModule'},
    {path: '404', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: '**', redirectTo: "404", pathMatch: 'full'},
]
