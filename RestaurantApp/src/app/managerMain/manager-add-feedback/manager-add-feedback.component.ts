import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'manager/addfeednack',
  templateUrl: './manager-add-feedback.component.html',
  styleUrls: ['./manager-add-feedback.component.css']
})
export class ManagerAddFeedbackComponent implements OnInit {

  constructor(
    private location: Location, 
    private router: Router ) { }

  ngOnInit() {
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

  onClickSubmit(feedbackForm: NgForm): void {
    console.log(feedbackForm.value);
      
  }

}
