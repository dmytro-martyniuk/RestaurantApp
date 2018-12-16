import { Injectable } from '@angular/core';
import { User } from '../../user';
import { USERS } from '../../users-db';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users = USERS;
  foundUser: User;

  constructor() { }

  login(username: string, password: string): string {
    
    this.foundUser = this.users.filter(us => (us.login == username && us.password == password))[0];
    if (!this.foundUser) {
      return 'incorrect';
    } else {
      return this.foundUser.role;
    }

  }
}
