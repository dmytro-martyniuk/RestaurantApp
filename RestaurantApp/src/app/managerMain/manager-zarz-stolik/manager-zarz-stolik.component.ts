import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-manager-zarz-stolik',
  templateUrl: './manager-zarz-stolik.component.html',
  styleUrls: ['./manager-zarz-stolik.component.css']
})
export class ManagerZarzStolikComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.router.navigate(['/']);
  }


  goBack() {
    this.location.back();
  }
}
