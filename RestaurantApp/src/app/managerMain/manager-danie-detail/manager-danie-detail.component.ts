import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DanieDetailComponent } from '../danie-detail/danie-detail.component';
import { DanieService } from 'src/app/services/danie.service/danie.service';
import { Danie } from 'src/app/classes/Danie';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manager-danie-detail',
  templateUrl: './manager-danie-detail.component.html',
  styleUrls: ['./manager-danie-detail.component.css']
})
export class ManagerDanieDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private danieService: DanieService
  ) { }

  allDanie: Danie[];
  danie: Danie;
  id: number;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id '];
      console.log(this.id);
    });
    this.allDanie = this.danieService.allDania;
     this.getDania();
    // this.feedbackService.removefeedback(1);
  }

  getDania() {

    // console.log(this.allDanie);
    this.danie = this.allDanie.find(x => x.id == this.id);
    //console.log(this.danie);
  }

  goBack() {
    this.location.back();
  }

  

}
