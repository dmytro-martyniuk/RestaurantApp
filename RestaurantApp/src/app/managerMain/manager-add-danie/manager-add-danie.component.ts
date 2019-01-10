import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms'
import { Danie } from 'src/app/classes/Danie';
import { DanieService } from 'src/app/services/danie.service/danie.service';


@Component({
  selector: 'app-manager-add-danie',
  templateUrl: './manager-add-danie.component.html',
  styleUrls: ['./manager-add-danie.component.css']
})
export class ManagerAddDanieComponent implements OnInit {

  constructor(
    private location: Location, 
    private router: Router,
    public danieService: DanieService
  ) { }

  ngOnInit() {
  }

  danie: Danie;

  logOut() {
    this.router.navigate(['/']);
  }

  goToAddFeedback() {
    this.router.navigate(['manager/addfeednack'])
  }

  goBack() {
    this.location.back();
  } 

  onClickSubmit(feedbackForm: NgForm): void {
    //console.log(feedbackForm.value);
   
    this.danie = feedbackForm.value;
    
    this.danie.id = Math.floor((Math.random() * 10000) + 1);
    console.log(this.danie);
    this.danieService.addDanie(this.danie);
    swal("Świetnie!", "Danie zostało dodane", "success");
    //this.router.navigate(['/']);
    setTimeout( () => {this.router.navigate(['/manager']); }, 2000 );
  
  } 


  alert() {
    
  }


}
