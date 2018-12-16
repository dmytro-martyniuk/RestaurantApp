import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit() {
    if(this.cookieService.get("user")!='manager'){
      this.router.navigate(['login']);
    }
  }
}
