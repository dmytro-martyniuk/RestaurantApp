import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// import { ConsoleReporter } from 'jasmine';


@Component({
  selector: 'manager-zarzad',
  templateUrl: './manager-zarzad.component.html',
  styleUrls: ['./manager-zarzad.component.css']
})
export class ManagerZarzadComponent implements OnInit {

  date: Date = new Date();
  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'dd-MM-yyyy hh:mm',
      defaultOpen: true
  }
  constructor(  
    private router: Router,
    private location: Location
    ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  logOut() {
    this.router.navigate(['/']);
  }
  
  onDateSelect(event: Event) {
    console.log(this.date);
  }

  nextPage() {
    this.router.navigate(['manager/mngmt/location']);
  }
}
