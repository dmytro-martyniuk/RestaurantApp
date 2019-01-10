import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-zarz-stolik-l2',
  templateUrl: './manager-zarz-stolik-l2.component.html',
  styleUrls: ['./manager-zarz-stolik-l2.component.css']
})
export class ManagerZarzStolikL2Component implements OnInit {

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

  alert() {
    swal("Świetnie!", "Stolik został zarezerwowany", "success");
    //this.router.navigate(['/']);
    setTimeout( () => {this.router.navigate(['/manager']); }, 2000 );
  }

    
}
