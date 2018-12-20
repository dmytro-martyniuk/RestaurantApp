import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FeedbackService } from 'src/app/services/feedback.service/feedback.service';
import { Feedback } from '../../feedback'
@Component({
  selector: 'manager-feedback',
  templateUrl: './manager-feedback.component.html',
  styleUrls: ['./manager-feedback.component.css']
})
export class ManagerFeedbackComponent implements OnInit {

  constructor(
      private router: Router, 
      private location: Location,
      private feedbackService: FeedbackService
    ) { }

    feedbacks: Feedback [];

  ngOnInit() {
    this.feedbacks = this.feedbackService.getFeedbacks();
  }

  logOut() {
    this.router.navigate(['/']);
  }

  goBack() {
    this.location.back();
  } 

  getInfo() {
    console.log(this.feedbacks);
  }

  onSelectFeedback(id:number) {
    this.router.navigate(['/manager/feedback/:id']);
  }
}
