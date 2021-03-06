import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {TruncatePipe} from "./pipes/truncate.pipe";
import {RegistrationComponent} from "./components/registration/registration.component";
import {PostListComponent} from "./components/postlist/postlist.component";
import {PostComponent} from "./components/post/post.component";
import {PostService} from "./services/post.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    TruncatePipe,
    RegistrationComponent,
    PostListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    routes
  ],
  providers: [
    UserService,
    AuthGuard,
    AlreadyAuthGuard,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
