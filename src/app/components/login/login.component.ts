/**
 * Created by anas on 27/03/17.
 */
import {Component} from "@angular/core";
import {LoginCredentials} from "../../models/loginCredentials";
import {UserService} from "../../services/user.service";
import {AuthEvent} from "../../models/authevent";
import {Router} from "@angular/router";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginResult: AuthEvent = {
    status: null,
    eventType: null,
    message: null
  };

  credentials: LoginCredentials = {
    username: "",
    password: ""
  };

  constructor(private userService: UserService,
              private router: Router) {
  }

  onSubmit(): void {
    this.loginResult.status = null;
    this.loginResult.message = null;

    this.userService
      .login(this.credentials)
      .subscribe((loginResult) => {
        this.loginResult = loginResult;

        if(loginResult.status === 'ok' && loginResult.eventType === 'login'){
          this.router.navigate(['/dashboard']);
        }
      });
  }
}
