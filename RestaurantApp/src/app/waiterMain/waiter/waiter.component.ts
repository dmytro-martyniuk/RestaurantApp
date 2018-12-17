import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {


  constructor(
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit() {
    if (this.cookieService.get("user") != 'waiter') {
      this.router.navigate(['login']);
    }
  }
}
