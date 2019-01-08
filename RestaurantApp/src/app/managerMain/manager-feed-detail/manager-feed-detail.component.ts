import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FeedbackService } from 'src/app/services/feedback.service/feedback.service';
import { Feedback } from 'src/app/classes/feedback';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'manager-feed-detail',
  templateUrl: './manager-feed-detail.component.html',
  styleUrls: ['./manager-feed-detail.component.css']
})
export class ManagerFeedDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public feedbackService: FeedbackService
  ) { }

  allFeedbacks: Feedback[];
  feedback: Feedback;
  id: number;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id '];
      // console.log(this.id);
    });
    this.getFeedback();
    this.feedbackService.removefeedback(1);
  }

  getFeedback() {
    this.allFeedbacks = this.feedbackService.getFeedbacks();
    console.log(this.allFeedbacks);
    this.feedback = this.allFeedbacks.find(x => x.id == this.id);
    console.log(this.feedback);
  }

  goBack() {
    this.location.back();
  }

  getInfo() {
    console.log(this.allFeedbacks);
  }

}
