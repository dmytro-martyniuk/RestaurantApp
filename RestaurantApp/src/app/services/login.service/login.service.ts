import { Injectable } from '@angular/core';
import { User } from '../../classes/User';
import { USERS } from '../../database/users-db';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users = USERS;
  foundUser: User;

  constructor(private cookieService: CookieService) { }

  login(username: string, password: string): string {
    
    this.foundUser = this.users.filter(us => (us.login == username && us.password == password))[0];
    if (!this.foundUser) {
      return 'incorrect';
    } else {
      this.cookieService.set("user", this.foundUser.role);
      return this.foundUser.role;
    }

  }
}
