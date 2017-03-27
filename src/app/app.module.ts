import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {MaterializeModule} from "angular2-materialize";

import {AppComponent} from "./app.component";
import {HomePageComponent} from "./components/homepage/homepage.component";
import {routes} from "./app.routing";
import {PageNotFoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {LoginComponent} from "./components/login/login.component";
import {UserService} from "./services/user.service";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./services/authguard.service";
import {AlreadyAuthGuard} from "./services/alreadyauthguard.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routes
  ],
  providers: [
    UserService,
    AuthGuard,
    AlreadyAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
