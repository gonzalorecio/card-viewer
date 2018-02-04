import {Routes} from "@angular/router"

export const routes: Routes = [
    {path: '', loadChildren: './about/about.module#AboutModule'},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'signin', loadChildren: './signin/signin.module#SigninModule'},
    {path: 'logout', loadChildren: './login/login.module#LoginModule'},
    {path: 'decks', loadChildren: './decks/decks.module#DecksModule'},
    {path: 'decks/:deck_id/cards', loadChildren: './cards/cards.module#CardsModule'},
    {path: 'decks/:deck_id/card', loadChildren: './card-detail/card-detail.module#CardDetailModule'},
    {path: 'deck', loadChildren: './deck-detail/deck-detail.module#DeckDetailModule'},
    {path: '404', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: '**', redirectTo: "404", pathMatch: 'full'},
];
