import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, NgForOf } from '@angular/common';
import { DanieService } from 'src/app/services/danie.service/danie.service';
import { Danie } from 'src/app/classes/Danie';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  constructor(
    private location: Location, 
    private router: Router,
    public danieService: DanieService
  ) { }

  allDania: Danie [];

  ngOnInit() {
    this.allDania = this.danieService.allDania;
    console.log("Menu-dania list: ")
    console.log(this.allDania);
  }
  logOut() {
    this.router.navigate(['/']);
  }

  goToAddFeedback() {
    this.router.navigate(['manager/addfeednack'])
  }

  goBack() {
    this.location.back();
  } 

  goToAddDanie() {
    this.router.navigate(['manager/add/danie'])
  }
  
}
