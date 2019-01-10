import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms'
import { Feedback } from 'src/app/classes/feedback';
import { Observable } from 'rxjs';
import { FeedbackService } from 'src/app/services/feedback.service/feedback.service';

@Component({
  selector: 'manager/addfeednack',
  templateUrl: './manager-add-feedback.component.html',
  styleUrls: ['./manager-add-feedback.component.css']
})
export class ManagerAddFeedbackComponent implements OnInit {

  constructor(
    private location: Location, 
    private router: Router,
    public feedbackService: FeedbackService ) { }

    feedbackURL :string  = "api/feedbacks";
    feedback: Feedback;
    string : String;

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
    //console.log(feedbackForm.value);
   
    this.feedback = feedbackForm.value;
    
    this.feedback.id = Math.floor((Math.random() * 10000) + 1);
    console.log(this.feedback);
    this.feedbackService.addFeedback(this.feedback);
    swal("Świetnie!", "Danie zostało dodane", "success");
    //this.router.navigate(['/']);
    setTimeout( () => {this.router.navigate(['/manager']); }, 2000 );
  } 

 // this.string = JSON.stringify(feedbackForm.value);
    //console.log(this.string);
    //feedback = new Feedback(feedbackForm.value);
   // this.feedbackService.addFeedback(feedbackForm.value);

}
