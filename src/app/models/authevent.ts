/**
 * Created by anas on 27/03/17.
 */
import {User} from "./user";

export interface AuthEvent {
  status: string;
  eventType: string;
  message: string;
  user?: User;
}
