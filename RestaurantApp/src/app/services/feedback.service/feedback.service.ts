import { Injectable } from '@angular/core';
import { Feedback } from '../../feedback';
import { FEEDBACKS } from '../../feedback-db';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }

  feedbacks = FEEDBACKS;
}
