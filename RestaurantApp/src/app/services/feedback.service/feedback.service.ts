import { Injectable } from '@angular/core';
import { Feedback } from '../../classes/feedback';
import { FEEDBACKS } from '../../database/feedback-db';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private http: HttpClient
  ) { }

  feedbacks = FEEDBACKS;
  length:number;
  newFeedback:Feedback;
  feedbackURL :string  = "api/feedbacks";
  allFeedbacks: Feedback [];
  
  ngOnInit() {
    

  }

  
  getAllFeedbacks() {
    this.getFeedbacks().subscribe(
      data => {this.allFeedbacks = data}
    )
  }


  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.feedbackURL)
    .pipe(
      tap(_ => console.log('fetched data')),
      catchError(this.handleError('getAllFeedbacks', []))
    ); 
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  
  addFeedback(feedback: Feedback){
      this.addFeedbackToDB(feedback).subscribe(
      d=>console.log(d)
    )
  }

  addFeedbackToDB(feedback: Feedback): Observable<any> {
    return this.http.post<Feedback>(this.feedbackURL, feedback)
    .pipe(
      tap(_ => console.log('added feedback to db')),
      catchError(this.handleError('getAllZamowienie', []))
    );
  }

}
