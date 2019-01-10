import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'manager/report',
  templateUrl: './manager-report.component.html',
  styleUrls: ['./manager-report.component.css']
})
export class ManagerReportComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  logOut() {
    this.router.navigate(['/']);
  }

  popup(){
  swal("Cudownie!", "Raporty zostały wygenerowane", "success");
  }
}
