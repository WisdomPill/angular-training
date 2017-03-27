/**
 * Created by anas on 27/03/17.
 */
import {EventEmitter, Injectable} from "@angular/core";
import {LoginCredentials} from "../models/loginCredentials";
import {User} from "../models/user";
import {AuthEvent} from "../models/authevent";

@Injectable()
export class UserService {
  private currentUser: User = JSON.parse(localStorage.getItem("user"));

  public $loginStream = new EventEmitter<AuthEvent>();

  public login(credentials: LoginCredentials) {

    setTimeout(() => {

      if (credentials.username === "anas" && credentials.password === "anas") {
        this.currentUser = {
          username: credentials.username
        };
        localStorage.setItem("user", JSON.stringify(this.currentUser));
        this.$loginStream.emit({
          status: "ok",
          eventType: "login",
          message: "logged in Successfully",
          user: this.currentUser
        });
      } else {
        this.$loginStream.emit({
          status: "ko",
          eventType: "login",
          message: "login Error"
        });
      }

    }, 1000);

    return this.$loginStream;
  }

  public logout() {
    localStorage.removeItem("user");
    this.currentUser = null;
    this.$loginStream.emit({
      status: 'ok',
      eventType: 'logout',
      message: 'logged out successfully'
    });
    return this.$loginStream;
  }

  public isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  public getUser(): User {
    return this.currentUser;
  }
}
