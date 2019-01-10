import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import swal from 'sweetalert';

@Component({
  selector: 'app-manager-zarz-stolik-l1',
  templateUrl: './manager-zarz-stolik-l1.component.html',
  styleUrls: ['./manager-zarz-stolik-l1.component.css']
})
export class ManagerZarzStolikL1Component implements OnInit {

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
