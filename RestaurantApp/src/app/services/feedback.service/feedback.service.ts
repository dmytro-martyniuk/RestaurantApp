import { Injectable } from '@angular/core';
import { Feedback } from '../../classes/feedback';
import { FEEDBACKS } from '../../database/feedback-db';
import { defaultScheduler } from '@angular/core/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }

  feedbacks = FEEDBACKS;
  length:number;
  newFeedback:Feedback;
  
  ngOnInit() {

  }
  getFeedbacks() :Feedback[] {
    this.length = this.feedbacks.length;
    return this.feedbacks;
  }

  removefeedback(id:number ) {
    //const index:number = this.feedbacks.indexOf()
    this.feedbacks.slice(id,1);
  }

  addFeedback(type:string, topic: string, desc: string, personData: string) {
    this.newFeedback = new Feedback();
    this.newFeedback.type = type;
    this.newFeedback.topic = topic;
    this.newFeedback.description = desc;
    this.newFeedback.personData = personData;
    this.newFeedback.id = this.feedbacks.length +1;
    this.feedbacks.push(this.newFeedback);
    FEEDBACKS.push(this.newFeedback);
  }

}
