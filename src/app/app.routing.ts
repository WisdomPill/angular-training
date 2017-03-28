import {RouterModule} from "@angular/router";
import {HomePageComponent} from "./components/homepage/homepage.component";
import {PageNotFoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./services/authguard.service";
import {AlreadyAuthGuard} from "app/services/alreadyauthguard.service";
import {RegistrationComponent} from "./components/registration/registration.component";

const appRoutes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AlreadyAuthGuard]
  },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [AlreadyAuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const routes = RouterModule.forRoot(appRoutes);
