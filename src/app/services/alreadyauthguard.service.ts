/**
 * Created by anas on 27/03/17.
 */
import {CanActivate, Router} from "@angular/router";
import {UserService} from "./user.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AlreadyAuthGuard implements CanActivate {
  constructor(private userService: UserService,
              private router: Router) {
  }

  canActivate(): boolean {
    if(this.userService.isLoggedIn()){
      this.router.navigate(["/dashboard"]);
      return false;
    }
    return true;
  }
}
