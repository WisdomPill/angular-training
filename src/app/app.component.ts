import {Component} from "@angular/core";
import {UserService} from "./services/user.service";
import {User} from "./models/user";
import {AuthEvent} from "./models/authevent";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = null;
  isLoggedIn: boolean = false;

  constructor(private userService: UserService,
  private router: Router) {
    this.isLoggedIn = userService.isLoggedIn();
    userService.$loginStream.subscribe((authEvent: AuthEvent) => {
      this.isLoggedIn = userService.isLoggedIn();
      this.user = userService.getUser();
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
